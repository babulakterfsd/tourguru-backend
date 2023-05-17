const mongoose = require('mongoose');
const PackageSchema = require('../schemas/Package.schema');

const Package = mongoose.model('Tourpackage', PackageSchema);

module.exports = Package;
