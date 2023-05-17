const {
    getAllReviewService,
    addReviewService,
    deleteReviewService,
} = require('../services/Review.services');

module.exports.getAllReview = async (req, res) => {
    const result = await getAllReviewService();
    res.json(result);
};

module.exports.addReview = async (req, res) => {
    const result = await addReviewService(req);
    res.json(result);
};

module.exports.deleteReview = async (req, res) => {
    const result = await deleteReviewService(req);
    res.json(result);
};
