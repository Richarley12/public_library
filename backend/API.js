import express from 'express';
import { establecerConexion } from "../backend/database/conexion.js";
import { rutas } from "../backend/routes/rutas.js";
import cors from 'cors';

export class API {
    constructor(){
        this.app=express()
        this.conectarConBD()
        this.configurarRutas()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT,()=>console.log('encendido en '+process.env.PORT))
    }
    configurarRutas(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarConBD(){
        establecerConexion()
    }
}