var express = require('express');
var router = express.Router();
const { User } = require('../models');
const user = require('../models/user');

/* GET users listing. */
router.get('/', async function(req, res, next) {
     try{
      const UserData = await User.findAll()
      res.send(UserData)
     }catch(error){
        next(err)
     }
});


/* GET users listing. */
router.get('/:id', async function(req, res, next) {
   try{
    const {} = req.params;
    console.log(id);
    User.findOne({where:{id:id}})
    res.send(userData);
   }catch(error){
      next(err)
   }
});

/* POST users listing. */
router.post('/', async function(req, res, next) {
   try{
    const {body} = req;
    console.log(body);
   //  res.send({a:1})
    const responseAdded =  await User.create(body);
    res.send(responseAdded); 
   }catch(error){
      next(err)
   }
});

/* PUT users listing. */
router.put('/:id', async function(req, res, next) {
   try{
    const {body, params} = req;
    const {id} = params;
   const updateResData =  await User.update(body,{where:{id:id}})
    res.send(updateResData);
   }catch(error){
      next(err)
   }
});

/* PUT users listing. */
router.delete('/:id', async function(req, res, next) {
   try{
    const {body, params} = req;
   const deleteResData =  await User.destroy({where:{id:id}})
    res.send(deleteResData);
   }catch(error){
      next(err)
   }
});
module.exports = router;
