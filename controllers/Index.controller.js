const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const jwt = require('jsonwebtoken');
const shootMail = require('../utils/sendEmail');

module.exports.createPaymentIntent = async (req, res) => {
    const service = req.body;
    const { price } = service;
    const amount = Math.round(price * 100);

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
    });
    res.send({ clientSecret: paymentIntent.client_secret });
};

module.exports.getAccessToken = async (req, res) => {
    const userEmail = req.body;
    const accessToken = jwt.sign(userEmail, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d',
    });
    res.send({ accessToken });
};

module.exports.sendEmail = async (req, res) => {
    const mailData = req.body;
    shootMail(mailData);
    res.send(mailData);
};

module.exports.welcome = async (req, res) => {
    res.send('Welcome to the tourguru API v2');
};
