const express=require('express')
const router=require('express').Router()
const connection =require('../config')


router.post('/register',(req,res)=>{
    const fullName=req.body.fullname
    const email =req.body.email
    const password=req.body.password
    const phoneNumber=req.body.phone
    
    const today= new Date()
    const users ={
        "fullname":fullName,
        "email":email,
        "password":password,
        "phonenumber":phoneNumber,
        "created_at":today,
        "updated_at":today
    }
   connection.query("SELECT * FROM users WHERE email=?",[email],(err,result,fields)=>{
        const queryResult=result.length
        if(queryResult>0){
            res.json({
                status:false,
                message:"Email has been already used"
            })
        }
        else{
          connection.query('INSERT INTO users SET ?',users,(error,results)=>{
                if(error){
                    res.json({
                        status:false,
                        message:error
                        })
                }
             else{
                    res.json({
                        status:true,
                        message:'user registered sucessfully'
         })
     }
   })
   
        }
       
   }) 
   
})

module.exports=router