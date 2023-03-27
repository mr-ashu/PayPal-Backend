const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../Schema/Person");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const app =express.Router()

app.get("/", async (req, res) => {
    try {
        let u = await UserModel.find({}, { password: 0 })
        res.send(u)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
app.post("/signup" ,async (req,res) => {
    let {email}=req.body;
 
    try {
     let u =await UserModel.findOne({email})
 
    
     if(u){
         return res.status(404).send("user already exist")
  
     }
     else{ 
     let user=await UserModel.create({...req.body})
     res.send([{token:`${user.email}_#_${user.password}`},{user}])
     }
    } catch (e) {
       res.status(404).send(e.message)
    }
});


app.post("/login",async (req, res) => {
    let {email,password}=req.body;
 
    try {
     let u = await UserModel.findOne({email,password})
    
     if(!u){
     return res.status(401).send("Authentication Failed")
     }
 
     res.send({
         token:`${u.email}_#_${u.password}`,user:u
 })
    } catch (e) {
       res.status(404).send(e.message)
    }
});

module.exports =app