//This is entry point of all routes just after main inex.js means codeial->index.js

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


//just to see it loaded or not 
console.log("router is loaded, Congratulations! you have done with setup of express router")


router.get('/', homeController.home);
router.use('/users', require('./users'));

//for any other routes, access from here
//router.use('routerName, require('./routerfile));


module.exports = router;