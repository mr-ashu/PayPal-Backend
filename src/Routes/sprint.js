const express =require("express");
 
 
const User =require("../Schema/Person")
const Sprint =require("../Schema/Sprint")
 
const Task =require("../Schema/Task")
 
 
const app=express.Router()

const authmiddleware=async (req,res,next)=>{
    let token=req.headers.token;
    if(!token){
        return res.send("token not found")
    }
    const [email,password]=token.split("_#_");
    try {
        let user= await User.findOne({email});
        if(user){
            if(password===user.password){
                req.userId=user.id;
                next()
            }
            else{
                res.status(404).send(`Auth Failed,incorrect password`)
            }
        }
        else{
            res.send(404).send(`user with email:${email} not found`)
        }
    } catch (e) {
        res.status(404).send(e.message)
        
    }
}

app.use(authmiddleware)
 
app.get("/sprint",async(req,res)=>{
 
    try {
       
        let sprint=await Sprint.find()
   
        res.send(sprint)
    } 
    catch (e) {
        res.status(400).send(e.message)
    }
})

app.get("/sprint/task/:id",async(req,res)=>{
 
    try {
       
        let sprint=await Task.find()
   
        res.send(sprint)
    } 
    catch (e) {
        res.status(400).send(e.message)
    }
})

app.post("/sprint",async(req,res)=>{
     
    try {
 
        let cart=await Sprint.create({
            ...req.body,
            user:req.userId,
           
        });
        res.send(cart)

    
        
    } 
    catch (e) {
        res.status(400).send(e.message)
    }
})

app.post("/sprint/task/:id",async(req,res)=>{
     
    try {
 
        let cart=await Task.create({
            ...req.body,
           
           
        });
        res.send(cart)

    
        
    } 
    catch (e) {
        res.status(400).send(e.message)
    }
})
 

app.delete("/sprint/:id", async (req, res) => {
    let {id}=req.params;
    try {
        let u = await Sprint.findByIdAndDelete({_id:id})
        res.send(u)
    } catch (e) {
        res.status(404).send(e.message)
    }
});

app.delete("/sprint/task/:id", async (req, res) => {
    let {id}=req.params;
    try {
        let u = await Task.findByIdAndDelete({_id:id})
        res.send(u)
    } catch (e) {
        res.status(404).send(e.message)
    }
});

app.patch("/sprint/task/:id", async (req, res) => {
    let {id}=req.params;
    
    let product=Task.findById({_id:id})
 
     if(!product){
        return res.status(404).send("not found")
     }
    try {

        let u = await  Task.updateMany({_id:id},req.body)
    
         res.send(u)
       
    } catch (e) {
        res.status(500).send(e.message)
    }
});
 
 


 
module.exports=app