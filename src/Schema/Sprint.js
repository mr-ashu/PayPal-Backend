const { default: mongoose, model } = require("mongoose");

const sprintSchema = new mongoose.Schema({
    name: { 
        type: String, 
       
    },
    startDate: { 
        type: String, 
   
    },
    endDate: { 
        type: String, 
        
    },
  
  
   
},
{ timestamps: false }
);

const SprintModel = mongoose.model("sprint", sprintSchema);

module.exports = SprintModel;