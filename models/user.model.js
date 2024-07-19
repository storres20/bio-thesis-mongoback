const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    profile: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    hospitals_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
})

module.exports = mongoose.model('User', dataSchema)