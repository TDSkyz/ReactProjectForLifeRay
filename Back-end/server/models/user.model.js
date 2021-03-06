const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        require: true,
        type: String
    },
    address: String,
    username: String,
    role: {
        type: String,
        enum: ['admin', 'normal', 'adminShop']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: Date
});

module.exports = mongoose.model('User', userSchema);