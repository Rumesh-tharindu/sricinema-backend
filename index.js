const express = require('express')

const app = express()

const router=require('./route/router')
app.use('/user',router)
app.listen('5000',()=>{
    console.log("listening...")
})