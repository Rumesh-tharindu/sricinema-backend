const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(cors())
const db=require('./models')

const PORT =process.env.PORT|| 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const router=require('./route/router')

app.use('/user',router)




db.sequelize.sync({force:true}).then(()=>{
 
app.listen(PORT,()=>{
    console.log("listening...")
    
   

})
})
