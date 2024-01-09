// src/controllers/inventoryController.js

const Inventory = require('../models/inventoryModel');
const { validationResult } = require('express-validator');

// Controller to get all inventory items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to create a new inventory item
exports.createItem = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, quantity, price } = req.body;

  try {
    const newItem = new Inventory({ name, quantity, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
