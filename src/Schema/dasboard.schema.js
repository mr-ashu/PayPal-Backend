const { Schema, model } = require("mongoose");

const DashboardSchema = new Schema(
  {
    sprint: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Sprint'  
    },
   
  },
  { timestamps: true }
);

const DashboardModel = model("paydash", DashboardSchema);

module.exports = DashboardModel;