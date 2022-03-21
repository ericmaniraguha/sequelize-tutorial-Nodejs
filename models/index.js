var Sequelize = require('sequelize');
var fs =  require('fs');
var path = require('path');
const exp = require('constants');
var basename = path.basename(module.filename);
var db = {};

const seq = new Sequelize('rootdb','orane','andela',{
  host:'localhost',
  dialect:'postgres'
})

seq.authenticate().then(()=>{
    console.log(`Connection Success with postgres Database : rootdb`);
}).catch((err) =>{   
        console.log(`Unsuccessful connection`, err);
    })

console.log(__dirname);
    fs.readdirSync(__dirname)
    .filter(function(file){
        return(file.indexOf('.')!==0)&&(file !== basename)&&(file.slice(-3)==='.js');

    }).forEach(function(file){
        var model = require(path.join(__dirname,file))(seq,Sequelize.DataTypes);
        db[model.name] = model;
    });

    Object.keys(db).forEach(function(modelName){
        if(db[modelName].associate){
            db[modelName].associate(db);
        }
    })
    db.sequelize = seq;
    db.Sequelize  = Sequelize;

    module.exports = db;