const { default: mongoose, model } = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        enum: ['bug', 'feature', 'story'], 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    assignee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Person' 
    },
    status: { 
        type: String, 
        enum: ['to do', 'in progress', 'done'], 
        default: 'to do' 
    }
  });

  const TaskModel = model("paytask", taskSchema);

module.exports = TaskModel;