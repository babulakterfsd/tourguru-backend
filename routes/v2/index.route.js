const express = require('express');
const IndexController = require('../../controllers/Index.controller');

const router = express.Router();

router.route('/').get(IndexController.welcome);

router.route('/create-payment-intent').post(IndexController.createPaymentIntent);

router.route('/getaccesstoken').post(IndexController.getAccessToken);

router.route('/sendemail').post(IndexController.sendEmail);

module.exports = router;
