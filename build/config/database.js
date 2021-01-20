"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var Database = /** @class */ (function () {
    function Database() {
        this.connection = mysql_1.default.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASS
        });
        this.initializeDb();
    }
    Database.prototype.initializeDb = function () {
        var users = "\n        CREATE TABLE IF NOT EXISTS USERS(\n            id int auto_increment PRIMARY KEY,\n            username varchar(50) UNIQUE,\n            password varchar(50),\n            email varchar(50),\n            name varchar(100),\n            creationDate datetime,\n            updateDate datetime,\n            removeDate datetime,\n            isActive boolean\n        );";
        var paymentMethod = "\n        CREATE TABLE IF NOT EXISTS PAYMENT_METHOD(\n            id int auto_increment PRIMARY KEY,\n            description varchar(100),\n            userId int,\n            isActive boolean,\n            constraint paymentUserId foreign key(userId) references USERS(id) on update cascade on delete cascade\n        );\n        ";
        var bill = "\n        CREATE TABLE IF NOT EXISTS BILLS(\n            id int auto_increment PRIMARY KEY,\n            name varchar(255),\n            dueDate datetime,\n            isRecursive boolean,\n            nameType char(1),\n            userId int,\n            isActive boolean,\n            endRecursion datetime,\n            paymentMethod int,\n            totalPrice float,\n            installmentNumber int,\n            entry float,\n            categoryId int,\n            constraint paymentMethod foreign key(paymentMethod) references PAYMENT_METHOD(id) on update cascade on delete cascade,\n            constraint billUserId foreign key(userId) references USERS(id) on update cascade on delete cascade,\n            constraint categoryId foreign key(categoryId) references CATEGORIES(id) on update cascade on delete cascade    \n        );\n        ";
        var payment = "\n        CREATE TABLE IF NOT EXISTS PAYMENT(\n            id int auto_increment PRIMARY KEY,\n            price float,\n            creationDate datetime,\n            isPaid boolean,\n            paymentDate datetime,\n            billId int,\n            constraint billId foreign key(billId) references BILLS(id) on update cascade on delete cascade\n        );\n        ";
        var category = "\n        CREATE TABLE IF NOT EXISTS CATEGORIES(\n            id int auto_increment PRIMARY KEY,\n            description varchar(100),\n            isActive boolean,\n            creationDate datetime,\n            updateDate datetime,\n            userId int,\n            constraint categoryUserId foreign key(userId) references USERS(id) on update cascade on delete cascade\n        );\n        ";
        this.connection.query(users, []);
        this.connection.query(paymentMethod, []);
        this.connection.query(bill, []);
        this.connection.query(payment, []);
    };
    return Database;
}());
var database = new Database();
exports.default = database.connection;
