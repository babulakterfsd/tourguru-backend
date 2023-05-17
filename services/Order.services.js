const { ObjectId } = require('mongodb');
const Order = require('../models/Order.model');

module.exports.getAllOrderService = async (req) => {
    if (req.query.email) {
        const { email } = req.query;
        const filter = { email: { $regex: email, $options: 'i' } };
        const result = await Order.find(filter).toArray();
        if (result.length === 0) {
            return result;
        }
        return result;
    }
    const result = Order.find({});
    return result;
};

module.exports.addANewOrderService = async (req) => {
    const orderedPackage = req.body;
    const result = await Order.insertOne(orderedPackage);
    return result;
};

module.exports.getMyOrderService = async (req) => {
    const decodedEmail = req?.decoded?.userEmail;
    const { email } = req.params;
    if (decodedEmail === email) {
        const result = await Order.find({
            email,
        });

        return result;
    }
};

module.exports.updateOrderStatusService = async (req) => {
    const { id } = req.params;
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };
    const packageUpdate = {
        $set: {
            status: 'approved',
        },
    };
    const result = await Order.updateOne(filter, packageUpdate, options);
    return result;
};

module.exports.deleteOrderService = async (req) => {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await Order.deleteOne(query);
    return result;
};
