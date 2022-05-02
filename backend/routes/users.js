const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error'+err))
});

router.route('/add').post((req,res)=>{
    const userName = req.body.userName;
    const userId = req.body.userId;
    const userRole =req.body.userRole;
     const newUser = new User({userName,userId,userRole});
     newUser.save()
     .then(()=>res.json('User added'))
     .catch(err=>res.status(400).json('Error:'+err))

});

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/:id').get((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(user=>res.json("User Deleted"))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('update/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        user.name = req.body.userName,
        user.role = req.body.userRole,
        exercise.save()
        .then(()=>res.json('User Details Updated'))
        .then((err => res.status(400).json('Error:'+err)));
    })
    .catch(err=>res.status(400).json('Error:'+err));
});
module.exports =router;