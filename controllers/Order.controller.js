const {
    getAllOrderService,
    addANewOrderService,
    getMyOrderService,
    updateOrderStatusService,
    deleteOrderService,
} = require('../services/Order.services');

module.exports.getAllOrder = async (req, res) => {
    const result = await getAllOrderService(req);
    res.json(result);
};

module.exports.addANewOrder = async (req, res) => {
    const result = await addANewOrderService(req);
    res.json(result);
};

module.exports.getMyOrder = async (req, res) => {
    const result = await getMyOrderService(req);
    res.json(result);
};

module.exports.updateOrderStatus = async (req, res) => {
    const result = await updateOrderStatusService(req);
    res.json(result);
};

module.exports.deleteOrder = async (req, res) => {
    const result = await deleteOrderService(req);
    res.json(result);
};
