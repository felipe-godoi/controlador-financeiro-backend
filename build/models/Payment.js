"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = /** @class */ (function () {
    function Payment(id, price, creationDate, isPaid, paymentDate, billId) {
        this.id = id;
        this.price = price;
        this.creationDate = creationDate;
        this.isPaid = isPaid;
        this.paymentDate = paymentDate;
        this.billId = billId;
    }
    Payment.prototype.getId = function () {
        return this.id;
    };
    Payment.prototype.setId = function (id) {
        this.id = id;
    };
    Payment.prototype.getPrice = function () {
        return this.price;
    };
    Payment.prototype.setPrice = function (price) {
        this.price = price;
    };
    Payment.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    Payment.prototype.setCreationDate = function (creationDate) {
        this.creationDate = creationDate;
    };
    Payment.prototype.getIsPaid = function () {
        return this.isPaid;
    };
    Payment.prototype.setIsPaid = function (isPaid) {
        this.isPaid = isPaid;
    };
    Payment.prototype.getPaymentDate = function () {
        return this.paymentDate;
    };
    Payment.prototype.setPaymentDate = function (paymentDate) {
        this.paymentDate = paymentDate;
    };
    Payment.prototype.getBillId = function () {
        return this.billId;
    };
    Payment.prototype.setBillId = function (billId) {
        this.billId = billId;
    };
    return Payment;
}());
exports.default = Payment;
