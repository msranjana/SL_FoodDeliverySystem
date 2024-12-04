let orders = [];
let idCounter = 1;

function placeOrder(items) {
  const order = {
    id: idCounter++,
    items,
    status: 'Preparing',
    createdAt: new Date()
  };
  orders.push(order);
  return order.id;
}

function getOrder(orderId) {
  return orders.find(order => order.id === parseInt(orderId));
}

function updateOrderStatuses() {
  orders.forEach(order => {
    if (order.status === 'Preparing') {
      order.status = 'Out for Delivery';
    } else if (order.status === 'Out for Delivery') {
      order.status = 'Delivered';
    }
  });
}

module.exports = { placeOrder, getOrder, updateOrderStatuses };
