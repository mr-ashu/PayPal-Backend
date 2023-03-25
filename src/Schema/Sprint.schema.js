const { default: mongoose, model } = require("mongoose");

const sprintSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    startDate: { 
        type: String, 
        required: true 
    },
    endDate: { 
        type: String, 
        required: true 
    },
   
},
{ timestamps: false }
);

const SprintModel = model("paysprint", sprintSchema);

module.exports = SprintModel;