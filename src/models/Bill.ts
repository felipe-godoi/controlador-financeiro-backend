export default class Bill{

    constructor(
        private id: number,
        private name: string,
        private price: string, 
        private dueDate: Date, 
        private recursive: string, 
        private recursionPeriod: string,
        private type: string, 
        private installmentPrice: string, 
        private user: string, 
        private active: string, 
        private endRecursion: Date
    ){}

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): string {
        return this.price;
    }

    public setPrice(price: string): void {
        this.price = price;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    public getRecursive(): string {
        return this.recursive;
    }

    public setRecursive(recursive: string): void {
        this.recursive = recursive;
    }

    public getRecursionPeriod(): string {
        return this.recursionPeriod;
    }

    public setRecursionPeriod(recursionPeriod: string): void {
        this.recursionPeriod = recursionPeriod;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getInstallmentPrice(): string {
        return this.installmentPrice;
    }

    public setInstallmentPrice(installmentPrice: string): void {
        this.installmentPrice = installmentPrice;
    }

    public getUser(): string {
        return this.user;
    }

    public setUser(user: string): void {
        this.user = user;
    }

    public getActive(): string {
        return this.active;
    }

    public setActive(active: string): void {
        this.active = active;
    }

    public getEndRecursion(): Date {
        return this.endRecursion;
    }

    public setEndRecursion(endRecursion: Date): void {
        this.endRecursion = endRecursion;
    }
}