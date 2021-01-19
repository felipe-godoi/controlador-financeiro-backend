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

        this.initializeDb();
    }

    initializeDb(){
        let users = `
        CREATE TABLE IF NOT EXISTS USERS(
            id int auto_increment PRIMARY KEY,
            username varchar(50) UNIQUE,
            password varchar(50),
            email varchar(50),
            name varchar(100),
            creationDate datetime,
            updateDate datetime,
            removeDate datetime,
            isActive boolean
        );`;

        let paymentMethod = `
        CREATE TABLE IF NOT EXISTS PAYMENT_METHOD(
            id int auto_increment PRIMARY KEY,
            description varchar(100),
            userId int,
            isActive boolean,
            constraint paymentUserId foreign key(userId) references USERS(id) on update cascade on delete cascade
        );
        `;

        let bill = `
        CREATE TABLE IF NOT EXISTS BILLS(
            id int auto_increment PRIMARY KEY,
            name varchar(255),
            dueDate datetime,
            isRecursive boolean,
            nameType char(1),
            userId int,
            isActive boolean,
            endRecursion datetime,
            paymentMethod int,
            totalPrice float,
            installmentNumber int,
            entry float,
            categoryId int,
            constraint paymentMethod foreign key(paymentMethod) references PAYMENT_METHOD(id) on update cascade on delete cascade,
            constraint billUserId foreign key(userId) references USERS(id) on update cascade on delete cascade,
            constraint categoryId foreign key(categoryId) references CATEGORIES(id) on update cascade on delete cascade    
        );
        `;

        let payment = `
        CREATE TABLE IF NOT EXISTS PAYMENT(
            id int auto_increment PRIMARY KEY,
            price float,
            creationDate datetime,
            isPaid boolean,
            paymentDate datetime,
            billId int,
            constraint billId foreign key(billId) references BILLS(id) on update cascade on delete cascade
        );
        `;

        let category = `
        CREATE TABLE IF NOT EXISTS CATEGORIES(
            id int auto_increment PRIMARY KEY,
            description varchar(100),
            isActive boolean,
            creationDate datetime,
            updateDate datetime,
            userId int,
            constraint categoryUserId foreign key(userId) references USERS(id) on update cascade on delete cascade
        );
        `;

        this.connection.query(users, []);
        this.connection.query(paymentMethod, []);
        this.connection.query(bill, []);
        this.connection.query(payment, []);
    }
}

let database = new Database();

export default database.connection;