/**
 * APIREST
 * 
 * Arquitecta básica
 * 
 *   Models - Operaciones CRUD en la tablas Users
 *   Routes - Cada ruta accede a una operación
 *            en la BD.
 *   Controllers - gestiona la petición y determina
 *              - que operación debe ejecutarse y
 *              - retorna los datos.
 *    Config - configurar las conexiones a las BD:
 *             MySQL y SQLServer
 *   
 *   Métodos HTTP: GET | POST | PUT | DELETE 
 * 
 *   Conector a BD - MySQL y SQLServer
 *      
 *   Thunderclient 
 */

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import formRoutes from './routes/formRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

// Cargar variables del archivo .env
dotenv.config({ path: './.env' });

// Verificar si leyó el puerto
console.log('PORT leído:', process.env.PORT);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Para usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos
app.use('/', express.static(path.join(__dirname, 'public')));

// Rutas originales de formularios
app.use('/api', formRoutes);

// Rutas nuevas de SQL Server
app.use('/api', apiRoutes);

// Puerto desde .env o 5000 por defecto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});