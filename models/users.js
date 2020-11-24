
module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("users",{
        userId:{
         type:DataTypes.UUID,
         defaultValue:DataTypes.UUIDV1,
        },
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
   },
   isVerified:{
       type:DataTypes.BOOLEAN,
       defaultValue:false
   }

    })
    return Users
}