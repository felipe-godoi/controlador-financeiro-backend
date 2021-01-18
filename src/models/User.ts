import connection from "../config/database";

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
        private active: string
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

    public getActive(): string {
        return this.active;
    }

    public setActive(active: string): void {
        this.active = active;
    }

    public save(){
        
    }

}