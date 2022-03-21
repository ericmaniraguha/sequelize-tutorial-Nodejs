const {} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{

class User extends Model{
    static associate(model){
        //create an associations
    }
};
User.init({
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:DataTypes.STRING,
    password: DataTypes.STRING,
    age:DataTypes.INTEGER,
},{
    sequelize,
    modelName:'User'
})
return User;
}