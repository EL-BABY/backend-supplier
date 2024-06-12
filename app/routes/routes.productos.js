import { Router } from "express";
import { ListarProductos, actualizarProductos, crearProductos, eliminarProductos, mostrarProductos, } from "../controller/controller.productos.js";
// import { validarPermiso } from "../middlewares/middleware.usuario.js";

const RutaProductos = Router();

RutaProductos.get("/productos/:id", mostrarProductos);

RutaProductos.post("/productos", crearProductos);

RutaProductos.get("/productos", ListarProductos);

RutaProductos.put("/productos", actualizarProductos);

RutaProductos.delete("/productos", eliminarProductos);


export default RutaProductos;