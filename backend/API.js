import express from 'express';
import { establecerConexion } from "./database/conexion.js";

export class API {
    constructor(){
        this.app=express()
        this.conectarConBD()
        // this.configurarRutas()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT,()=>console.log('encendido en '+process.env.PORT))
    }
    configurarRutas(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarConBD(){
        establecerConexion()
    }
}