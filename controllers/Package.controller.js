const {
    getAllPackagesService,
    addANewPackageService,
    getSinglePackageByIdService,
    deletePackageByIdService,
} = require('../services/Package.services');

module.exports.getAllPackages = async (req, res) => {
    const result = await getAllPackagesService(req);
    res.json(result);
};

module.exports.addANewPackage = async (req, res) => {
    const result = await addANewPackageService(req);
    res.json(result);
};

module.exports.getSinglePackageById = async (req, res) => {
    const result = await getSinglePackageByIdService(req);
    res.json(result);
};

module.exports.deletePackageById = async (req, res) => {
    const result = await deletePackageByIdService(req);
    res.json(result);
};
