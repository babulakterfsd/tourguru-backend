const mongoose = require('mongoose');
const reviewSchema = require('../schemas/Review.schema');

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
