/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const UserRoute = require('./routes/v2/user.route');
const IndexRoute = require('./routes/v2/index.route');
const PackageRoute = require('./routes/v2/package.route');
const ReviewRoute = require('./routes/v2/review.route');
const OrderRoute = require('./routes/v2/order.route');

const app = express();

/* ----------------- Express Middlewares ------------------ */
app.use(cors());
app.use(express.json());

/* ----------------- Routes ------------------ */
app.use('/api/v2/users', UserRoute);
app.use('/api/v2/packages', PackageRoute);
app.use('/api/v2/reviews', ReviewRoute);
app.use('/api/v2/orders', OrderRoute);

app.use('/api/v2', IndexRoute);

app.all('*', (req, res, next) => {
    res.status(404).json({ error: 'API endpoint not found' });
});

/* ----------------- Global Error Handler ------------------ */
app.use(errorHandler);

module.exports = app;
