import { Router } from 'express';
import * as crudSQL from '../controllers/usersSQLServer.js';

const router = Router();

/**
 * RUTAS SQL SERVER
 */

// http://localhost:5000/api/sqlserver/users
router.get('/sqlserver/users', crudSQL.getUsers);

// http://localhost:5000/api/sqlserver/users/correo@gmail.com
router.get('/sqlserver/users/:correo', crudSQL.findByEmail);

/**
 * Ejemplo de JSON para POST:
 * 
 * {
 *   "nombre": "Juan Pérez",
 *   "correo": "juan.perez@example.com",
 *   "contrasena": "12345678901234567890",
 *   "preguntarc": "¿Nombre de tu primera mascota?",
 *   "respuestarc": "Firulais"
 * }
 */

// http://localhost:5000/api/sqlserver/users
router.post('/sqlserver/users', crudSQL.registerUser);

export default router;