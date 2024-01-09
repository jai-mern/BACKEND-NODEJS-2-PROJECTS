// src/models/billingModel.js

const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  items: [
    {
      itemName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
