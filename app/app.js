import express from "express";
import RutaUsuario from "./routes/routes.usuarios.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) =>{
    res.send("Welcome to DATABASE");
});

app.use("/api", RutaUsuario);

export default app;