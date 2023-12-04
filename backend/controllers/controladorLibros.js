import { Servicios_Libros } from "../services/servicioLibro.js";
import {modeloLibro} from "../models/modeloLibro.js"


export class ControladorLibros{
    constructor(){}
    async resgitrarLibro(peticion,respuesta){
        const objetoServicioLibro= new Servicios_Libros()
        try {
            const { nombre,autor,genero,editorial,url}= peticion.body
            if(!nombre || !autor || !genero || !url){ 
                respuesta.status(400).send("Faltan datos en la petición")
            }else {
                const nuevolibro = new modeloLibro({
                nombre,
                autor,
                genero,
                editorial,
                url})
                await objetoServicioLibro.registrarLibros(nuevolibro);
                respuesta.status(200).json({
                    "mensaje":"Exito al guardar"
                })
            }
    } catch(error){
        respuesta.status(500).json({
            "mensaje":"Error al guardar "+ error 
        })
    }
    }
    async buscarLibros(peticion,respuesta){
        const objetoServicioLibro= new Servicios_Libros()
        try{
            respuesta.status(200).json({
                "mensaje":"Exito buscando los libros",
                "libros":await objetoServicioLibro.buscarTodosLibros(),
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }



}