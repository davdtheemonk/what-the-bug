const mongoose = require('mongoose');

const inviteSchema = new  mongoose.Schema({
    email:{
        type:String,required:true
    },
    users:[{
        type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    workspaces:[{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace"
    }]},{

      timestamps:true,
  
  
  });

const Invite = mongoose.model('Invite',inviteSchema)
module.exports = {Invite};
  