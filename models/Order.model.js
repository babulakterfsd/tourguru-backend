const mongoose = require('mongoose');
const orderSchema = require('../schemas/Order.schema');

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
