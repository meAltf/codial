//This is entry point of all routes just after main inex.js means codeial->index.js

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


//just to see it loaded or not 
console.log("router is loaded, Congratulations! you have done with setup of express router")


router.get('/', homeController.home);


module.exports = router;