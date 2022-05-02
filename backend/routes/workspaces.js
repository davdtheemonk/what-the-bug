const router = require('express').Router();
const{Workspaces} = require('../models/workspace.model')
const {Invite} =require("../models/invite.model");
const User = require('../models/user.model')
//Lists all workspaces in Database
router.route('/').get((req,res)=>{
    Workspaces.find()
    .then(workspaces=>res.json(workspaces))
    .catch(err=>res.status(400).json('Error'+err))
});
 
//Adds new workspace
router.route('/add').post((req,res)=>{
   
   const workspacename =  req.body.workspacename;
    const workspaceId = req.body.workspaceId;
     const newWorkspace = new Workspaces({workspacename,workspaceId});
     newWorkspace.save()
     .then(()=>res.json('Workspace Created'))
     .catch(err=>res.status(400).json('Error:'+err))

});

//invite registered users//unregisterd users to workspace
router.route('/sendInvite/:id').post( (req,res)=>{
   const createInvite = function(invite){
       return Invite.create(invite).then(doc=>{
           return doc
       })
   }
   const addInviteToWorkspace = function(workspaceId,invite){
       return Workspaces.findOneAndUpdate({workspaceId:workspaceId},
        {$push:{invites:invite._id}},
        {new:true,useFindAndModify:false})
   }
   const addInviteToUser = function(userId,invite){
       return User.findOneAndUpdate({userId:userId},
        {$push:{invites:invite._id}},
        {new: true,useFindAndModify:false})
   }
   const addUsertoInvite = function(inviteId,user){
    return Invite.findByIdAndUpdate(
        inviteId,
        {$push:{ users:user._id}},
        { new: true, useFindAndModify: false }
    )
}
   const addWorkspacetoInvite = function(inviteId,workspace){
       return Invite.findByIdAndUpdate(
           inviteId,
           {$push:{ workspaces:workspace._id}},
           { new: true, useFindAndModify: false }
       )
   }
   const run = async function(){
       const work_space = []
  
       const inviteX = await createInvite({
           email: req.body.email
        })
        console.log(inviteX)
        const workspaceId = req.params.id
        const userId = req.body.userId
        const workspaceRes = await addInviteToWorkspace(workspaceId,inviteX)
        const workspace =  Workspaces.findOne({workspaceId:workspaceId})
        .then((workspace)=>{
   
            const inviteRes = addWorkspacetoInvite(inviteX._id,workspace)
            

        })
        .catch((err)=>{
            console.log("An Error Occured "+err)
        })
        const user = User.find({userId:userId}).
        then((user)=>{
            return user 
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(work_space)
     
        const userRes = await addInviteToUser(req.body.userId,inviteX)
        console.log(userRes)
        const inviteRes2 = await addUsertoInvite(inviteX._id,user)
        console.log(inviteRes2)
   }
   run()

})

//joining members by URl
/*router.router('/joinedusers/:id').post((req,res)=>{
    Workspaces.find({workspaceId:req.params.id})
    .then((workspace))
})
*/

module.exports =router;