const express = require('express');
const controller = require('../controllers/stockMovement.controller');
const router = express.Router();
router.get('/', controller.getStockMovements);
module.exports = router;