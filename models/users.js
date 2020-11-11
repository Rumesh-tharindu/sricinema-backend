
module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("users",{
        
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
             type:DataTypes.STRING,
             allowNull:false,
             unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
       },
       phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
   }

    })
    return Users
}