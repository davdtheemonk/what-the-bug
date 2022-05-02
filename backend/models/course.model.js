const mongoose = require("mongoose");
const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    description: String,
    instuctor:String,
    startdate:{type:Date,required:true},
    enddate:{type:Date,required:true},
    date:{type:Date,required:true},
    user: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
    workspace:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace"
    }
  })
  ,{

    timestamps:true,


});
module.exports = Course;
