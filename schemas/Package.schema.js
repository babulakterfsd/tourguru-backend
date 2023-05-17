const mongoose = require('mongoose');

const PackageSchema = mongoose.Schema(
    {
        location: {
            city: {
                type: String,
                trim: true,
                unique: true,
                required: [true, 'City name is required'],
            },
            country: {
                type: String,
                trim: true,
                unique: true,
                required: [true, 'Country name is required'],
            },
        },
        duration: String,
        price: Number,
        img: String,
        description: String,
        services: [String],
    },
    {
        timestamps: true,
    }
);

module.exports = PackageSchema;
