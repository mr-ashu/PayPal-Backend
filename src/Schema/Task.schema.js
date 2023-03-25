const { default: mongoose, model } = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
      
    },
    description: { 
        type: String, 
        required: true 
    },
    assignee: { 
        type:String,
    },
    status: { 
        type: String, 
      
    }
  });

  const TaskModel = model("paytask", taskSchema);

module.exports = TaskModel;