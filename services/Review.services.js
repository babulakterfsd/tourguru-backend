const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types.ObjectId;
const Review = require('../models/Review.model');

module.exports.getAllReviewService = async () => {
    const result = await Review.find({});
    return result;
};

module.exports.addReviewService = async (req) => {
    const { email } = req.params;
    const decodedEmail = req?.decoded?.userEmail;
    if (decodedEmail === email) {
        const review = req.body;
        const result = new Review(review);
        const savedReview = await result.save();
        return savedReview;
    }
};

module.exports.deleteReviewService = async (req) => {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await Review.deleteOne(query);
    return result;
};
