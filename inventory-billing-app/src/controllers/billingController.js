// src/controllers/billingController.js

const Billing = require('../models/billingModel');
const { validationResult } = require('express-validator');

// Controller to generate an invoice
exports.generateInvoice = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { customerName, items } = req.body;

  try {
    // Implement your logic to generate the invoice based on customerName and items
    // For example, you can calculate the total amount, create an invoice record, etc.

    const totalAmount = calculateTotalAmount(items);
    const newInvoice = new Billing({ customerName, items, totalAmount });

    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Helper function to calculate the total amount based on items
const calculateTotalAmount = (items) => {
  // Implement your logic to calculate the total amount based on the items
  // For example, you can iterate through the items and sum the prices
  return items.reduce((total, item) => total + item.price, 0);
};
