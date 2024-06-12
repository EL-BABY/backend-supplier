import { Router } from "express";

const RutaMUsuario = Router();

RutaMUsuario.get("/usuario", (req, res) => {
    res.json({
        "nombre": "Camilo ",
        "Apellido": "torres suarez",
        "telefono": 312456
    });
});

RutaMUsuario.post("/usuario" , (req, res) =>{
    console.log(req.body);
    let nombre = req.body.name;

    res.json({
        "respuesta": "Esto es un post para agregar a " + nombre
    });
});



// Crea una instancia de Express

// Define una ruta para buscar usuarios por ID
RutaMUsuario.get('/api/usuario/:id', (req, res) => {
    // Obtiene el ID del parámetro de la URL
    const userId = req.params.id;

    // Aquí deberías tener lógica para buscar el usuario en tu base de datos o en cualquier otro lugar
    // Por ahora, simularemos un objeto de usuario estático
    const usuario = {
        id: userId,
        nombre: 'Ejemplo',
        correo: 'ejemplo@example.com',
        // Agrega más propiedades según sea necesario
    };

    // Envía el objeto de usuario como respuesta
    res.json(usuario);
});


export default RutaMUsuario;
