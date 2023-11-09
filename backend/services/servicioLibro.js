import { modeloLibro } from "../models/modeloLibro.js";

export class Servicios_Libros{
    constructor(){}
    async registrarLibros(datosLibro){
        let Nuevolibro = new modeloLibro(datosLibro);
        return await Nuevolibro.save() 
    }
}