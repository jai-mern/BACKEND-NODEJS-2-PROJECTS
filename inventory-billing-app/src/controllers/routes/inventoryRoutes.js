// src/routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const inventoryController = require('../controllers/inventoryController');

// Route to get all inventory items
router.get('/', inventoryController.getAllItems);

// Route to create a new inventory item
router.post(
  '/',
  [
    check('name').notEmpty().withMessage('Name is required'),
    check('quantity').isNumeric().withMessage('Quantity must be a number'),
    check('price').isNumeric().withMessage('Price must be a number'),
  ],
  inventoryController.createItem
);

module.exports = router;
