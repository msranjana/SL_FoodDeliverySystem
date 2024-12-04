const express = require('express');
const router = express.Router();
const menu = require('../data/menu');

// Add Menu Item (POST /menu)
router.post('/', (req, res) => {
  const { name, price, category } = req.body;

  // Validate input
  if (!name || price <= 0 || !['Appetizer', 'Main Course', 'Dessert'].includes(category)) {
    return res.status(400).json({ error: 'Invalid menu item data' });
  }

  menu.addMenuItem({ name, price, category });
  res.status(201).json({ message: 'Menu item added successfully' });
});

// Get Menu (GET /menu)
router.get('/', (req, res) => {
  const items = menu.getMenuItems();
  res.json(items);
});

module.exports = router;
