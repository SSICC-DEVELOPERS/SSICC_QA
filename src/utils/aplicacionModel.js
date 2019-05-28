const mongoose = require('mongoose');
const mongoparse = require('mongodb-extjson');

const Schema = mongoose.Schema;

const AplicacionesSchema = new Schema(
	{
    nombre: { type: String, required: true },
    descripcion: { type: String, default: '' },
    usuarioCreacion: { type: String, default: '' },
    fechaCreacion: { type: Date, default: new Date() },
    activo: { type: Boolean, default: true }
	}
)

module.exports = mongoose.model('aplicaciones', AplicacionesSchema);
