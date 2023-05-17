const express = require('express');
const UserController = require('../../controllers/User.controller');
const { verifyJWT } = require('../../middlewares/verifyToken');

const router = express.Router();

/* get single users details from database
app.get("/user/:email", verifyJWT, )
app.put("/updateuser/:email",  ) */
router
    .route('/singleuser/:email')
    .get(verifyJWT, UserController.getSingleUserinfo)
    .put(UserController.updateUserProfile)
    .delete(UserController.deleteUser);

router.route('/').get(UserController.getAllUser).put(UserController.updateUser);

router.route('/:email').get(UserController.checkAdminRole);
router.route('/:id').put(UserController.updateUserToAdmin);

module.exports = router;
