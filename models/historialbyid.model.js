const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historialbyidSchema = new Schema({
    historials_id: { type: Schema.Types.ObjectId, ref: 'Historial' },
    users_id: { type: Schema.Types.ObjectId, ref: 'User' },
    note: String,
    fecha: String,
});

module.exports = mongoose.model('Historialbyid', historialbyidSchema);
