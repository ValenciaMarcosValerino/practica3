/**
 * Encargado de procesar las peticiones
 * Responsabilidades:
 *   1. Recibir datos del formulario
 *   2. Procesos de validación adicionales.
 *   3. Llamar a servicios para procesar datos, si es el caso.
 *   4. Devolver respuesta al cliente. 
 */
import { updatePassword } from "../models/usuarios.js";

export const recuperarPassword = async (req, res) => {
  const { correo, preguntaRecuperacion, nuevaPassword } = req.body;

  if (!correo || !preguntaRecuperacion || !nuevaPassword) {
    return res.json({ msg: "Faltan datos" });
  }

  const user = await updatePassword(
    correo,
    preguntaRecuperacion,
    nuevaPassword
  );

  if (!user) {
    return res.json({ msg: "Datos incorrectos" });
  }

  res.json({ msg: "Contraseña actualizada correctamente" });
};


import { createUser } from "../models/usuarios.js";

export const registrarUsuario = async (req, res) => {
  const { correo, password, preguntaRecuperacion } = req.body;

  if (!correo || !password || !preguntaRecuperacion) {
    return res.json({ msg: "Faltan datos" });
  }

  const user = await createUser({
    email: correo,
    password,
    preguntaRecuperacion
  });

  if (!user) {
    return res.json({ msg: "El usuario ya existe" });
  }

  res.json({ msg: "Usuario registrado correctamente" });
};