const {} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{

class User extends Model{
    static associations(models){
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