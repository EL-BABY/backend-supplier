import { createPool } from "mysql2/promise";

 export const pool = createPool({
    user : "root",
    password: "",
    host : "localhost",
    port: 3306,
    database: "reservas"

 });