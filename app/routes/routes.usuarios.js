import { Router } from "express";
import { actualizarUsuario, crearUsuario, eliminarUsuario, mostrarUsuario } from "../controller/controller.usuarios.js";

const RutaUsuario = Router();

RutaUsuario.get("/usuario", mostrarUsuario);

RutaUsuario.post("/usuario", crearUsuario);

RutaUsuario.put("/usuario", actualizarUsuario);

RutaUsuario.delete("/usuario", eliminarUsuario);


export default RutaUsuario;