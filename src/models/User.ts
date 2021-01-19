import connection from "../config/database";

class Response{
    constructor(
        public response: any,
        public error: boolean
    ){}

    toJson(): Object{
        let json = {
            "response": this.response,
            "error": this.error
        };

        return json;
    }
}

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
        private removeDate: Date,
        private isActive: boolean
    ){}

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

    public getRemoveDate(): Date {
        return this.removeDate;
    }

    public setRemoveDate(removeDate: Date): void {
        this.removeDate = removeDate;
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
            json.removeDate,
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
                removeDate,
                isActive
            ) VALUES (?,?,?,?,?,?,?,?)
            `;
    
            let params = [
                this.username,
                this.password,
                this.email,
                this.name,
                this.creationDate,
                this.updateDate,
                this.removeDate,
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