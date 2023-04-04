const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

console.log('router is loaded');

router.get('/',homeController.home);

router.post('/add',homeController.add);

router.post('/delete-ids',homeController.delete);


module.exports = router;