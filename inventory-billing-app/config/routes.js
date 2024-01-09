// config/routes.js

const express = require('express');
const inventoryRoutes = require('../src/routes/inventoryRoutes');
const billingRoutes = require('../src/routes/billingRoutes');

const router = express.Router();

router.use('/inventory', inventoryRoutes);
router.use('/billing', billingRoutes);

module.exports = router;
