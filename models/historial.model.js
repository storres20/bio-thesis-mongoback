const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historialSchema = new Schema({
    hospitals_id: { type: Schema.Types.ObjectId, ref: 'Hospital' },
    inventories_id: { type: Schema.Types.ObjectId, ref: 'Inventory' },
    servicio: String,
    problema: String,
    fecha_open: String,
    estado: String,
    usersid_open: { type: Schema.Types.ObjectId, ref: 'User' },
    usersid_close: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    fecha_close: String,
    solucion: String,
});

module.exports = mongoose.model('Historial', historialSchema);
