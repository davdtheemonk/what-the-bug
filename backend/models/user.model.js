const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {type:String,required:true},
    role:{type:String,required:true},
    userId:{type:String,required:true},
    invites:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invite"
    }],
    email:{type:String,required:true},
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
    workspaces:[{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace"
    }]},{

      timestamps:true,
  
  
  }));
module.exports = User;