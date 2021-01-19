export default class Bill{

    constructor(
        private id: number,
        private name: string,
        private dueDate: Date, 
        private isRecursive: boolean, 
        private nameType: string,
        private userId: number, 
        private isActive: boolean, 
        private endRecursion: Date,
        private paymenyMethod: number,
        private totalPrice: string,
        private installmentNumber: number,
        private entry: number
    ){}

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getTotalPrice(): string {
        return this.totalPrice;
    }

    public setTotalPrice(price: string): void {
        this.totalPrice = price;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    public getIsRecursive(): boolean {
        return this.isRecursive;
    }

    public setIsRecursive(isRecursive: boolean): void {
        this.isRecursive = isRecursive;
    }

    public getNameType(): string {
        return this.nameType;
    }

    public setNameType(nameType: string): void {
        this.nameType = nameType;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getIsActive(): boolean{
        return this.isActive;
    }

    public setIsActive(isActive: boolean): void {
        this.isActive = isActive;
    }

    public getEndRecursion(): Date {
        return this.endRecursion;
    }

    public setEndRecursion(endRecursion: Date): void {
        this.endRecursion = endRecursion;
    }

    public getPaymenyMethod(): number {
        return this.paymenyMethod;
    }

    public setPaymenyMethod(paymenyMethod: number): void {
        this.paymenyMethod = paymenyMethod;
    }

    public getInstallmentNumber(): number {
        return this.installmentNumber;
    }

    public setInstallmentNumber(installmentNumber: number): void {
        this.installmentNumber = installmentNumber;
    }

    public getEntry(): number {
        return this.entry;
    }

    public setEntry(entry: number): void {
        this.entry = entry;
    }
}