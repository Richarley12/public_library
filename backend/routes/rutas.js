import  express  from "express";
import { ControladorLibros } from "../controllers/controladorLibros.js";

const controladorLibros= new ControladorLibros()

export const rutas= express.Router()

rutas.post('/registrarlibro',controladorLibros.resgitrarLibro)