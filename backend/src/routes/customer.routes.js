const express = require('express');

const {
  listCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customer.controller');

const router = express.Router();
const customerController = require('../controllers/customer.controller');
console.log(customerController);
router.get('/', listCustomers);
router.get('/:id', getCustomer);
router.post('/', createCustomer);
router.patch('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;