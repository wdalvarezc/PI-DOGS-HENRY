const {Router} = require('express');
const {Op}=require('sequelize');
const {User} = require('../db');
const router = Router();

router.get('/',async (req,res)=>{
   try {
       const {
           name,
           life_time_min
       }=req.body
       const filtro = await Dog.findAll({
           where:{
               [Op.or]:[
                   {
                    name:{[Op.like]:`%${name}%`}
                   },
                   {
                    life_time_min:{[Op.like]:`%${life_time_min}%`}
                   }
               ]
               
           }
       })
       res.status(200).send(filtro);
   } catch (error) {
       console.log(error);
   } 
});


module.exports = router