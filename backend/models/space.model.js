const mongoose = require("mongoose");
const Space = mongoose.model(
  "Space",
  new mongoose.Schema({
    spacename: {type:String,required:true},
    imageurl:String,
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          }
    ],
    workspaces:[{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace"
    }],
    messages:[{
    
        type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    
    }],
  })
  ,{

    timestamps:true,


});
module.exports = Space;