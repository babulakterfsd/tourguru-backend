const express = require('express');
const ReviewController = require('../../controllers/Review.controller');
const { verifyJWT } = require('../../middlewares/verifyToken');

const router = express.Router();

router.route('/').get(ReviewController.getAllReview);

router.route('/delete/:id').delete(verifyJWT, ReviewController.deleteReview);

router.route('/:email').post(verifyJWT, ReviewController.addReview);

module.exports = router;
