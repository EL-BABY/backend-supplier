import { pool } from "../../config/db_mysql.js";

export const mostrarUsuario = async(req, res) =>{
    try {
        const resultado = await pool.query("select * from usuarios");
        console.log(resultado[0]);
        res.json(resultado[0]);
        
    } catch (error) {
        res.json({
            error:"error",
            "method":"get"
        });
        
    };
};

export const crearUsuario = async(req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        insert into usuarios (idusuario,
            identificacion,
            nombre,
            correo,
            contrasena,
            telefono)
            values( ${info.idusuario}, ${info.identificacion}, '${info.nombre}', '${info.correo}', '${info.contrasena}', ${info.telefono})
        `);
        if(resultado[0].affectedRows > 0){
            res.json({
                "respuesta": "Usuario Creado",
            });
        }else{
            res.json({
                "respuesta": "El Usuario no ah sido creado",
            });
        }
        
    } catch (error) {
        res.json({
            "error": error,
            "method": "post"
        });
    };
};


export const actualizarUsuario = async(req, res) =>{
    let info = req.body;
    try {
        const resultado = await pool.query(`
        update usuarios
        set
        idusuario = ${info.idusuario},
        identificacion = ${info.identificacion},
        nombre = '${info.nombre}',
        correo = '${info.correo}',
        contrasena = '${info.cotrasena}',
        telefono = ${info.telefono}
        where idusuario = ${info.idusuario}
        `);
        if(resultado[0].affectedRows > 0) {
            res.json({
                "respuesta": "El usuario a sido actualizado",
            });
        }else{
            resnjson({
                "respuesta": "El usuario no se a actualizado",

            });;
        }
        
    } catch (error) {
        res.json({
            "error": error,
            "method": "put"
        });
    };
};

export const eliminarUsuario = async (req, res) =>{
    let info = req.body;
    try {
        const resultado = await pool.query(`
        delete from usuarios
        where idusuario = ${info.idusuario} 
        `);

        if(resultado[0].affectedRows > 0) {
            res.json({
                "respuesta": "Usuario Eliminado correctamente",
            });
        }else{
            res.json({
                "respuesta": "Usuario no eliminado",
            });
        }
    } catch (error) {
        res.json({
            "error": error,
            "method": "delete"
        });
    };
};