import { Router } from "express";
import RutaUsuario from "./routes.directoriousuarios.js";
import RutaMUsuario from "./routes.usuario.js";
import RutaProductos from "./routes.productos.js";

// import rutaSaludo from "./routes.saludo.js";

const Ruta = Router();
// Ruta.use("/api", rutaSaludo);

Ruta.use("/api", RutaProductos);
Ruta.use("/api", RutaUsuario);
Ruta.use("/api", RutaMUsuario);

export default Ruta;

