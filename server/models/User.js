const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema); 