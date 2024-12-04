const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const { updateOrderStatuses } = require('./data/orders');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// Start the CRON job for status updates
cron.schedule('*/1 * * * *', () => { // Runs every minute
  updateOrderStatuses();
  console.log('Order statuses updated.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
