import { API } from "./backend/API.js";
import * as dotenv from 'dotenv' 
dotenv.config()

console. log ('iniciamos')
let servidor= new API()
servidor.levantarServidor

