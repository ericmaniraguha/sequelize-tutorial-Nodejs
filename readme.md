# Steps:
1. Install nodeJS
2. What is NPM?
3. Understanding basic routes system
4. Mysql isntalled in your system
5. configure sequelize in express
6. configure models
7. create basic crud
8. ready to work for the project

npm install -g express-generator
express --view-pug node-api
npm install
npm install sequelize
npm i pg pg-hstore # PostgreSQL


# To create table after configurations we have to use migration
1. npm i --save-dev migration-cli
2. create migration
## ============================
1. First you need to create migrations folder or run sequelize init
2. run the command bellow
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,age:integer

3. create a config folder with format inside make config.json which will hold database information 
4. after creating a db run the migration using command
 node_modules/.bin/sequelize db:migrate
