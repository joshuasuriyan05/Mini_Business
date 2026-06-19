const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const auth = require('../middleware/auth');
const requireRole = require('../middleware/requireRole');

router.get(
  '/',
  auth,
  requireRole('ADMIN', 'SALES_USER'),
  productController.listProducts
);

router.get(
  '/:id',
  auth,
  requireRole('ADMIN', 'SALES_USER'),
  productController.getProduct
);

router.post(
  '/',
  auth,
  requireRole('ADMIN'),
  productController.createProduct
);

module.exports = router;