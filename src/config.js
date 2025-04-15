import { config } from "dotenv";

config();
//railway servr backend
export default {
    database: {
        host: process.env.MYSQLHOST || 'mysql.railway.internal',
        user: process.env.MYSQLUSER || 'root',
        password: process.env.MYSQLPASSWORD || 'GsxfHYccOQErmPwUiVAJzXAxiutqzemS',
        database: process.env.MYSQLDATABASE || 'railway'
    }
    
};

//local
/*export default {
    host: process.env.MYSQL_HOST || "",
    database: process.env.MYSQL_DATABASE || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASSWORD || ""
}*/