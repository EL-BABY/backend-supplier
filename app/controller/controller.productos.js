import { pool } from "../../config/db_mysql.js";
// import { tokenSing } from "../middlewares/middleware.usuario.js";

export const mostrarProductos = async(req, res) =>{
    let id = req.params.id;
    try {
        const resultado = await pool.query(`select * from productos where idproductos = ${id}`);
        // console.log(resultado[0]);
        res.json(resultado[0]);
        
    } catch (error) {
        res.json({
            "error":error,
            "method":"get"
        });
        
    };
};

export const crearProductos = async(req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        insert into productos(
            idproductos,
            productos,
            descripcion,
            precio)
            values (
                ${info.idproductos}, 
                '${info.productos}', 
                '${info.descripcion}', 
                '${info.precio}'
            )
        `);
        if(resultado[0].affectedRows > 0){
            res.json({
                "respuesta": "Producto Creado",
            });
        }else{
            res.json({
                "respuesta": "El Producto no ah sido creado",
            });
        }
        
    } catch (error) {
        res.json({
            "error": error,
            "method": "post"
        });
    };
};


export const actualizarProductos = async(req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        update productos
        set
        idproductos = ${info.idproductos},
        productos = '${info.productos}',
        descripcion = '${info.descripcion}',
        precio = ${info.precio}
        WHERE idproductos = ${info.idproductos}
        `);
        if(resultado[0].affectedRows > 0) {
            res.json({
                "respuesta": "El Producto a sido actualizado",
            });
        }else{
            resnjson({
                "respuesta": "El Producto no se a actualizado",

            });
        }
        
    } catch (error) {
        res.json({
            "error": error,
            "method": "put"
        });
    };
};

export const eliminarProductos = async (req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        delete from productos
        where idproductos = ${info.idproductos} 
        `);

        if(resultado[0].affectedRows > 0) {
            res.json({
                "respuesta": "Producto Eliminado correctamente",
            });
        }else{
            res.json({
                "respuesta": "Producto no eliminado",
            });
        }
    } catch (error) {
        res.json({
            "error": error,
            "method": "delete"
        });
    };
};


 export const ListarProductos = async(req, res) =>{

    try {
        const resultado = await pool.query("select * from productos");
        res.json(resultado[0]);

    } catch (error) {
        res.json({
            "error": error,
            "method": get
        });
        
    };
};