const express=require('express')
const router=require('express').Router()
const db=require('../models')
const bcrypt = require('bcrypt');


router.post('/register',(req,res)=>{
    const saltRounds = 10;
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
         var  hashPassword=hash
         db.users.create({
            userName:req.body.username,
            email:req.body.email,
            password:hashPassword,
            phoneNumber:req.body.phone
    
        }).then((response)=>{
            res.json({"message":"success","response":response})
        }).catch((err)=>{
            res.json(err)
        })
        });
    });
    
   
})

module.exports=router