const { Schema, model, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
 
  },
  { timestamps: true }
);

const UserModel =mongoose.model("person", UserSchema);

module.exports = UserModel;