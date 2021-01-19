export default class PaymentMethod{
    constructor(
        private id: number,
        private price: number,
        private creationDate: Date,
        private isPaid: boolean,
        private paymentDate: Date,
        private billId: number
    ){}

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getCreationDate(): Date {
        return this.creationDate;
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }

    public getIsPaid(): boolean {
        return this.isPaid;
    }

    public setIsPaid(isPaid: boolean): void {
        this.isPaid = isPaid;
    }

    public getPaymentDate(): Date {
        return this.paymentDate;
    }

    public setPaymentDate(paymentDate: Date): void {
        this.paymentDate = paymentDate;
    }

    public getBillId(): number {
        return this.billId;
    }

    public setBillId(billId: number): void {
        this.billId = billId;
    }
}