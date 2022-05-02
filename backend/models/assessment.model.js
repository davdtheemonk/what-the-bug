const mongoose = require("mongoose");
const Assessment = mongoose.model(
  "Assessment",
  new mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    startdate:{type:Number,required:true},
    enddate:{type:Number,required:true},
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        }
      ],
    workspaces:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace"
    },  users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
       }]
,
  })
  ,{

    timestamps:true,


});
module.exports = Assessment;