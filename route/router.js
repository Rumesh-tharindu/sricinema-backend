const express=require('express')
const router=require('express').Router()
const db=require('../models')
const bcrypt = require('bcrypt');
const nodemailer=require('nodemailer')
const hbs = require('nodemailer-express-handlebars');
const path=require('path')
const randomString=require('randomstring')

router.get('/private',(req,res)=>{
    res.send("hi")
})


router.post('/register',(req,res)=>{
    const __dirname=path.dirname('Users/rumesh/Desktop/Development2/node/sri-cinema-backend/')
    const saltRounds = 10;
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
          user:"tharindurumesh20@gmail.com",
          pass:"my$077nethmi"
        }
    })
    transporter.use('compile',hbs({
        viewEngine: {
          extName: '.hbs',
          partialsDir: './views/',
          layoutsDir: './views/',
          defaultLayout: null
        
        },
        viewPath: './views/',
        extName: '.hbs',
    
      }))
    var mailOptions = {
        from: 'tharindurumesh20@gmail.com',
        to:req.body.email,
        subject: 'Sending Email using Node.js',
        text:"text here",
        template:'index'
        
      };
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
         var  hashPassword=hash
         db.users.create({
            userName:req.body.username,
            email:req.body.email,
            password:hashPassword,
            phoneNumber:req.body.phone
    
        }).then((response)=>{
            transporter.sendMail(mailOptions,(err,info)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(info)
                }
            })
            res.json({"response":true,"message":"success","result":response})
        }).catch((err)=>{
            res.json({"response":false,"message":"Email address is already used"})
        })
        });
    });


    
    

})

router.get('/confirmEmail',(req,res)=>{
    res.json({
       " message":true
    })
})

module.exports=router