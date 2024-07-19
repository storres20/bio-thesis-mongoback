const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    name: String,
    address: String,
    // Other fields
});

module.exports = mongoose.model('Hospital', hospitalSchema);
