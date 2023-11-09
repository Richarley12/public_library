import mongoose from 'mongoose';

const Schema= mongoose.Schema;

const Libro = new Schema({
    nombre:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    genero:{
        type:String,
        required:true
    },
    subgenero:{
        type:String,
        required:false
    },
    url:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        default: true
    }
})

export const modeloLibro = mongoose.model('libros',Libro);
