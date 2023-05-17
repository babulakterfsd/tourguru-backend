const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types.ObjectId;
const Package = require('../models/Package.model');

module.exports.getAllPackagesService = async (req) => {
    if (req.query.location) {
        const { location } = req.query;
        const filter = { 'location.city': { $regex: location, $options: 'i' } };
        const result = await Package.find(filter);
        if (result.length === 0) {
            return result;
        }
        return result;
    }
    const limit = +req.query.limit;
    let result;
    if (limit) {
        result = await Package.find({}).sort({ _id: -1 }).limit(limit);
    } else {
        result = await Package.find({}).sort({ _id: -1 });
    }
    return result;
};

module.exports.addANewPackageService = async (req) => {
    const data = req.body;
    const newPackage = new Package(data);
    const savedPackage = await newPackage.save();
    return savedPackage;
};

module.exports.getSinglePackageByIdService = async (req) => {
    const { packageid } = req.params;
    const query = { _id: ObjectId(packageid) };
    const result = await Package.findOne(query);
    return result;
};

module.exports.deletePackageByIdService = async (req) => {
    const { packageid } = req.params;
    const query = { _id: ObjectId(packageid) };
    const result = await Package.deleteOne(query);
    return result;
};
