const express =require("express");
 
 
 
const Sprint =require("../Schema/Sprint.schema")
 
const Task =require("../Schema/Task.schema")
 
 
const app=express.Router()

 
app.get("/sprint",async(req,res)=>{
 
    try {
       
        let carts=await Sprint.find();
        res.send(carts)
    } 
    catch (error) {
        res.status(400).send(e.message)
    }
})

app.post("/sprint",async(req,res)=>{
     
    try {
 
        let cart=await Sprint.create({
            ...req.body
        });
        res.send(cart)

    
        
    } 
    catch (error) {
        res.status(400).send(e.message)
    }
})



app.get("/sprint/:id/tasks", async (req, res) => {
 
    try {
        const tasks = await Task.find();
     res.send(tasks);
    } catch (e) {
        res.status(404).send(e.message)
    }
});
 
app.get('/tasks/:assignee', async (req, res) => {
    const tasks = await Task.find({ assignee: req.params.assignee });
    res.send(tasks);
  });

app.post('/sprint/:id/tasks', async (req, res) => {
    const task = await Task.create({
     ...req.body
    });
    
    res.send(task);
  });

  app.put('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      assignee: req.body.assignee,
      status: req.body.status,
      type: req.body.type
    }, { new: true });
    res.send(task);
  });


  app.delete('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndRemove(req.params.id);
    res.send(task);
  });
 
module.exports=app