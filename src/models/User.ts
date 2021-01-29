import connection from "../config/database";
import Response from './BasicResponse';


export class Login{
    constructor(
        public username: string,
        public password: string
    ){}
}

export default class User{
    constructor(
        private id: number,
        private username: string,
        private password: string,
        private email: string,
        private name: string,
        private creationDate: Date,
        private updateDate: Date,
        private deletedDate: Date | null,
        private deleted: boolean,
        private isActive: boolean
    ){}

    public getDeletedDate(): Date | null{
        return this.deletedDate;
    }

    public setDeletedDate(deletedDate: Date): void {
        this.deletedDate = deletedDate;
    }

    public getDeleted(): boolean {
        return this.deleted;
    }

    public setDeleted(deleted: boolean): void {
        this.deleted = deleted;
    }

    public getId(): number {
        return this.id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCreationDate(): Date {
        return this.creationDate;
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }

    public getUpdateDate(): Date {
        return this.updateDate;
    }

    public setUpdateDate(updateDate: Date): void {
        this.updateDate = updateDate;
    }

    public isIsActive(): boolean {
        return this.isActive;
    }

    public setIsActive(isActive: boolean): void {
        this.isActive = isActive;
    }

    public static fromJson(json: User): User{
        return new User(
            json.id,
            json.username,
            json.password,
            json.email,
            json.name,
            json.creationDate,
            json.updateDate,
            json.deletedDate,
            json.deleted,
            json.isActive
        )
    }

    public save(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let query = `
            INSERT INTO USERS(
                username,
                password,
                email,
                name,
                creationDate,
                updateDate,
                deletedDate,
                deleted,
                isActive
            ) VALUES (?,?,?,?,?,?,?,?,?)
            `;
    
            let params = [
                this.username,
                this.password,
                this.email,
                this.name,
                this.creationDate,
                this.updateDate,
                this.deletedDate,
                this.deleted,
                this.isActive
            ];
    
            connection.query(query, params, (err, result) => {
                let response;
                
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                response = new Response(result.insertId, false);
                resolve(response); 
            });
        });
    }

    public deactivate(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let date = new Date();

            let query = `
            UPDATE USERS
                set isActive = 0,
                set updateDate = ${date}
            ) where id=?
            `;
    
            let params = [
                this.id
            ];
    
            connection.query(query, params, (err, result) => {
                let response;
                
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                response = new Response("Desativado com sucesso!", false);
                resolve(response); 
            });
        });
    } 

    public activate(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let date = new Date();

            let query = `
            UPDATE USERS
                set isActive = 1,
                set updateDate = ${date}
            ) where id=?
            `;
    
            let params = [
                this.id
            ];
    
            connection.query(query, params, (err, result) => {
                let response;
                
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                response = new Response("Reativado com sucesso!", false);
                resolve(response); 
            });
        });
    } 

    public update(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let date = new Date();

            let query = `
            UPDATE USERS
                set password = ?,
                set name = ?,
                set updateDate = ${date}
            where id=?
            `;
    
            let params = [
                this.password,
                this.name,
                this.updateDate,
                this.id
            ];
    
            connection.query(query, params, (err, result) => {
                let response;
                
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                response = new Response("Atualizado com sucesso!", false);
                resolve(response); 
            });
        });
    }

    public remove(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let date = new Date();

            let query = `
            UPDATE USERS
                set deleted=1,
                set updateDate = ${date}
            where id=?
            `;
    
            let params = [
                this.id
            ];
    
            connection.query(query, params, (err, result) => {
                let response;
                
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                response = new Response("Removido com sucesso!", false);
                resolve(response); 
            });
        });
    }

    public restore(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let date = new Date();

            let query = `
            UPDATE USERS
                set deleted=0,
                set updateDate = ${date}
            where id=?
            `;
    
            let params = [
                this.id
            ];
    
            connection.query(query, params, (err, result) => {
                let response;
                
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                response = new Response("Restaurado com sucesso!", false);
                resolve(response); 
            });
        });
    }

    public static getAll(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let query = "SELECT * FROM USERS";

            connection.query(query, [], (err, result) => {
                let users: Array<User> = [];
                let response;
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                for(let i=0; i < result.length; i++){
                    let element = User.fromJson(result[i]);

                    users.push(element);
                }
                response = new Response(users, false);
                resolve(response);
            });
        });
    }

    public static auth(login: Login){
        return new Promise(async (resolve, reject) => {
            let queryUsername = "select * from USERS where username=? and password=?";
            let queryEmail = "select * from USERS where email=? and password=?";
    
            let credentials = [
                login.username,
                login.password
            ];
    
            
            var response: Response;
            connection.query(queryUsername, credentials, (err, result) => {
                if (err){
                    return;
                }

                if (result.length == 1){
                    response = new Response(result[0], false);
                    resolve(response);
                }

                connection.query(queryEmail, credentials, (err, result) => {
                    if (err){
                        return;
                    }
    
                    if (result.length == 1){
                        response = new Response(result[0], false);
                        resolve(response);
                    }

                    response = new Response("Usuário ou senha não encontrados.", true);
                    resolve(response);
                });
            });
        });
    }

    public static getOneById(id: number){
        return new Promise(async (resolve, reject) => {
            let query = "select * from USERS where id=?";
    
            
            var response: Response;
            connection.query(query, [id], (err, result) => {
                if (err){
                    return;
                }

                if (result.length == 1){
                    response = new Response(result[0], false);
                    resolve(response);
                }

                response = new Response("Id não encontrado.", true);
                resolve(response);
            });
        });
    }
}