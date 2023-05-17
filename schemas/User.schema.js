const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            validate: [validator.isEmail, 'Provide a valid Email'],
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, 'Email address is required'],
        },
        displayName: String,

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },

        img: String,
        address: String,
        city: String,
        country: String,
        gender: String,
        phone: String,
    },
    {
        timestamps: true,
    }
);

/* ----------------- Middlewares ------------------ */

/* ----------------- Instance Methods ------------------ */

module.exports = userSchema;
