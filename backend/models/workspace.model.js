const mongoose = require('mongoose');

const workspaceSchema = new  mongoose.Schema({
    workspacename:{
        type:String,
        required:true},
    workspaceId:{
        type:String,
        unique:true,
        required:true,
    },
    invites:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"invites"
    }],
    users:[{
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
             }]},{

    timestamps:true


})
const Workspaces = mongoose.model('Workspaces',workspaceSchema)
module.exports = {Workspaces};
