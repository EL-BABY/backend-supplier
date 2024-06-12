import { pool } from "../../config/db_mysql.js";
import { tokenSing } from "../middlewares/middleware.usuario.js";

export const mostrarUsuario = async(req, res) =>{
    let id = req.params.id;
    try {
        const resultado = await pool.query(`select * from usuario where idusuario = ${id}`);
        // console.log(resultado[0]);
        res.json(resultado[0]);
        
    } catch (error) {
        res.json({
            "error":error,
            "method":"get"
        });
        
    };
};

export const crearUsuario = async(req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        insert into usuario (
            idusuario,
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


export const actualizarUsuario = async (req, res) => {
    let info = req.body;
    try {
        let resultado = await pool.query(`
        UPDATE usuario
        SET
        idusuario = ${info.idusuario},
        identificacion = ${info.identificacion},
        nombre = '${info.nombre}',
        correo = '${info.correo}',
        contrasena = '${info.contrasena}',
        telefono = ${info.telefono}
        WHERE idusuario = ${info.idusuario}
        `);
        if (resultado[0].affectedRows > 0) {
            res.json({
                "respuesta": "El usuario ha sido actualizado"
            });
        } else {
            res.json({
                "respuesta": "El usuario no ha sido actualizado"
            });
        }
    } catch (error) {
        res.json({
            "error": error,
            "method": "put"
        });
    }
};

export const eliminarUsuario = async (req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        delete from usuario
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


export const LoginUsuario = async(req, res) => {
    let correo = req.body.correo;
    let contrasena = req.body.contrasena;
    try {
        let resultado = await pool.query(`
        select correo from usuario
        where correo = '${correo}' and contrasena = '${contrasena}'
        `);

        if(resultado[0]==""){
            res.json({
                respuesta:"Logueo Incorrecto",
                estado: false
            });
        }else{
            let token = tokenSing({
                correo:correo,
                contrasena:contrasena
            });
            res.json({
                "respuesta": "Logueo correcto",
                "estado": true,
                token:token
            });
        }
    } catch (error) {
        res.json({
            respuesta: "Error en el logueo",
            type: error
        });
    }
}


 export const ListarUsuario = async(req, res) =>{

    try {
        const resultado = await pool.query("select * from usuario");
        res.json(resultado[0]);

    } catch (error) {
        res.json({
            "error": error,
            "method": get
        });
        
    };
};