const express=require('express')
const router=require('express').Router()

router.get('/register',(req,res)=>{
    res.json({'username':'rumesh'})
})

module.exports=router