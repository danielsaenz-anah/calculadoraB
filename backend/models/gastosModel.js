const mongoose = require ('mongoose')

const gastosSchema = mongoose.Schema ({
    descripcion : {
        type: String,
        required: [true, 'Teclea la descripción']
    },
    importe : {
        type: Number,
        required: [true, 'Teclea el importe']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Gasto', gastosSchema)