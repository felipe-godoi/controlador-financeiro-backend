import connection from '../config/database';
import Response from './BasicResponse';

export default class Category{
    constructor(
        private id: number,
        private description: string,
        private isActive: boolean,
        private creationDate: Date,
        private updateDate: Date,
        private userId: number,
        private deletedDate: Date,
        private deleted: boolean
    ){}
    public getDeletedDate(): Date {
        return this.deletedDate;
    }

    public setDeletedDate(deletedDate: Date): void {
        this.deletedDate = deletedDate;
    }

    public isDeleted(): boolean {
        return this.deleted;
    }

    public setDeleted(deleted: boolean): void {
        this.deleted = deleted;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getIsActive(): boolean {
        return this.isActive;
    }

    public setIsActive(isActive: boolean): void {
        this.isActive = isActive;
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

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public save(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let query = `
            INSERT INTO CATEGORIES(
                description,
                isActive,
                creationDate,
                updateDate,
                userId
            ) VALUES (?,?,?,?,?)
            `;
    
            let params = [
                this.id,
                this.description,
                this.isActive,
                this.creationDate,
                this.updateDate,
                this.userId
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
            UPDATE CATEGORIES
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
            UPDATE CATEGORIES
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

    public remove(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let date = new Date();

            let query = `
            UPDATE CATEGORIES
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
            UPDATE CATEGORIES
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

    public update(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let query = `
            UPDATE CATEGORIES 
                set description,
                creationDate,
                updateDate,
                userId
            ) VALUES (?,?,?,?,?)
            `;
    
            let params = [
                this.id,
                this.description,
                this.isActive,
                this.creationDate,
                this.updateDate,
                this.userId
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

    public static fromJson(json: Category): Category{
        return new Category(
            json.id,
            json.description,
            json.isActive,
            json.creationDate,
            json.updateDate,
            json.userId,
            json.deletedDate,
            json.deleted
        )
    }

    public static getOneById(id: number){
        return new Promise(async (resolve, reject) => {
            let query = "select * from CATEGORIES where id=?";
    
            
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

    public static getAll(): Promise<Response>{
        return new Promise((resolve, reject) => {
            let query = "SELECT * FROM CATEGORIES";

            connection.query(query, [], (err, result) => {
                let categories: Array<Category> = [];
                let response;
                if (err){
                    response = new Response(err.stack, true);
                    reject(response); 
                }

                for(let i=0; i < result.length; i++){
                    let element = Category.fromJson(result[i]);

                    categories.push(element);
                }
                response = new Response(categories, false);
                resolve(response);
            });
        });
    }
}