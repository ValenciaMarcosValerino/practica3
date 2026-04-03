import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import formRoutes from "./routes/formRoutes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// archivos estáticos
app.use("/", express.static(path.join(__dirname, "public")));

// rutas
app.use("/api", formRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});