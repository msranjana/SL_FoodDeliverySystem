const express = require('express');
const router = express.Router();
const orders = require('../data/orders');
const menu = require('../data/menu');

// Place Order (POST /orders)
router.post('/', (req, res) => {
  const { items } = req.body;

  // Validate order
  if (!items || items.length === 0 || !items.every(id => menu.isMenuItemExists(id))) {
    return res.status(400).json({ error: 'Invalid order data' });
  }

  const orderId = orders.placeOrder(items);
  res.status(201).json({ message: 'Order placed successfully', orderId });
});

// Get Order (GET /orders/:id)
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  const order = orders.getOrder(orderId);

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json(order);
});

module.exports = router;
