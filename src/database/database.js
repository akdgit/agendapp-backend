import mysql from "promise-mysql";
import config from "../config.js";

const  connection = mysql.createPool({
    host: config.database.host,
    database: config.database.database,
    user: config.database.user,
    password: config.database.password,
    timezone: "local"
});



export const getConnection = () => {
    return connection;
};