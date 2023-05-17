const express = require('express');
const PackageController = require('../../controllers/Package.controller');
const { verifyJWT } = require('../../middlewares/verifyToken');

const router = express.Router();

router
    .route('/')
    .get(PackageController.getAllPackages)
    .post(verifyJWT, PackageController.addANewPackage);

router
    .route('/:packageid')
    .get(PackageController.getSinglePackageById)
    .delete(verifyJWT, PackageController.deletePackageById);

module.exports = router;
