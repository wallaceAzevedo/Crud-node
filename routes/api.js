const express = require ('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/teste', apiController.test);
module.exports = router;