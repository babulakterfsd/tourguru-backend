const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        rating: String,
        comment: String,
    },
    {
        timestamps: true,
    }
);

module.exports = ReviewSchema;
