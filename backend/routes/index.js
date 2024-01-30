const express = require('express');

const userRoutes=require('./user');
const accountRoutes=require('./account');
const router=express.Router();

router.use('/user',userRoutes);
router.use('/account',accountRoutes);


module.exports=router;

