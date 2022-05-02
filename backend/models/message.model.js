const mongoose = require("mongoose");
const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    text: String,
    imageurl:String,
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          }
    ],
    workspaces:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace"
    }
  })
  ,{

    timestamps:true,


});
module.exports = Message;