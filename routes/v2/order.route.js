const express = require('express');
const OrderController = require('../../controllers/Order.controller');
const { verifyJWT } = require('../../middlewares/verifyToken');

const router = express.Router();

router.route('/myorder/:email').get(verifyJWT, OrderController.getMyOrder);

router
    .route('/')
    .get(verifyJWT, OrderController.getAllOrder)
    .post(verifyJWT, OrderController.addANewOrder);

router
    .route('/:id')
    .put(verifyJWT, OrderController.updateOrderStatus)
    .delete(verifyJWT, OrderController.deleteOrder);

module.exports = router;
