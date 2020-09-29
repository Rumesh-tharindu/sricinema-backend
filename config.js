const mysql=require('mysql')

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'my$077nethmi',
    database:'Sricinema'
})
connection.connect((error)=>{
  
    if(!error){
        console.log("database is connected")
    }
    else{
        console.log("database is not connected")
    }
})

module.exports=connection