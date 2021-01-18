import mysql from "mysql";

class Database{
    public connection: mysql.Connection;

    constructor(){
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASS
        });
    }
}

let database = new Database();

export default database.connection;