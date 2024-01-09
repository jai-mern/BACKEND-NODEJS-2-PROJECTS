// src/routes/billingRoutes.js

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const billingController = require('../controllers/billingController');

// Route to generate an invoice
router.post(
  '/generateInvoice',
  [
    check('customerName').notEmpty().withMessage('Customer name is required'),
    check('items').isArray().withMessage('Items must be an array'),
    check('items.*.itemName').notEmpty().withMessage('Item name is required'),
    check('items.*.quantity').isNumeric().withMessage('Item quantity must be a number'),
    check('items.*.price').isNumeric().withMessage('Item price must be a number'),
  ],
  billingController.generateInvoice
);

module.exports = router;
