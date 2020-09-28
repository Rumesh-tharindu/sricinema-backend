const express=require('express')
const router=require('express').Router()

router.post('/register',(req,res)=>{
    res.json({'username':'rumesh'})
})

module.exports=router