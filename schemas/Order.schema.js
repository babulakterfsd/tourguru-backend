const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        email: String,
        billingDetails: {
            name: String,
            email: String,
            trxid: String,
        },
        shippingAddress: {
            firstName: String,
            lastName: String,
            address1: String,
            address2: String,
            city: String,
            state: String,
            zip: String,
            country: String,
        },
        selectedPackage: {
            _id: String,
            location: {
                city: String,
                country: String,
            },
            duration: String,
            price: Number,
            img: String,
            description: String,
            services: [String],
        },
        status: String,
    },
    {
        timestamps: true,
    }
);

module.exports = OrderSchema;
