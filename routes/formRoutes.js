/*
   rutas a acciones correspondientes a los 
   métodos HTTP POST y GET según correspondan 
   para las peticiones al servidor.

   En estas rutas se invocan a los controladores
   que son los encargados de procesar las 
   peticiones.
*/
import express from "express";
import { recuperarPassword } from "../controllers/formControllers.js";

const router = express.Router();

router.post("/recuperar", recuperarPassword);

export default router;

import { registrarUsuario } from "../controllers/formControllers.js";

router.post("/registro", registrarUsuario);
