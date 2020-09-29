const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(cors())
const router=require('./route/router')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/user',router)

app.listen('5000',()=>{
    console.log("listening...")
})