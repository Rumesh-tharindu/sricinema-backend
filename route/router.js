const express=require('express')
const router=require('express').Router()
const connection =require('../config')


router.post('/register',(req,res)=>{
    const fullName=req.body.fullName
    const email =req.body.email
    const password=req.body.password
    const phoneNumber=req.body.phone

    res.json()
})

module.exports=router