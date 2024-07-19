const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    brand: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    },
    serie: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    codepat: {
        required: true,
        type: String
    },
    show: {
        required: true,
        type: String,
    },
    hospitals_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: 'Hospital',
    },
})

module.exports = mongoose.model('Inventory', dataSchema)