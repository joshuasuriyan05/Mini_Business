const express = require('express');
const salesOrderController = require('../controllers/salesOrder.controller');
const router = express.Router();
router.get('/', salesOrderController.listSalesOrders);
router.post('/', salesOrderController.createSalesOrder);
router.post('/:id/confirm', salesOrderController.confirmSalesOrder);
router.get('/:id', salesOrderController.getSalesOrder);
module.exports = router;