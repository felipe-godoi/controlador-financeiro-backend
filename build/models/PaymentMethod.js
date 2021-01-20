"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod(id, price, creationDate, isPaid, paymentDate, billId) {
        this.id = id;
        this.price = price;
        this.creationDate = creationDate;
        this.isPaid = isPaid;
        this.paymentDate = paymentDate;
        this.billId = billId;
    }
    PaymentMethod.prototype.getId = function () {
        return this.id;
    };
    PaymentMethod.prototype.setId = function (id) {
        this.id = id;
    };
    PaymentMethod.prototype.getPrice = function () {
        return this.price;
    };
    PaymentMethod.prototype.setPrice = function (price) {
        this.price = price;
    };
    PaymentMethod.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    PaymentMethod.prototype.setCreationDate = function (creationDate) {
        this.creationDate = creationDate;
    };
    PaymentMethod.prototype.getIsPaid = function () {
        return this.isPaid;
    };
    PaymentMethod.prototype.setIsPaid = function (isPaid) {
        this.isPaid = isPaid;
    };
    PaymentMethod.prototype.getPaymentDate = function () {
        return this.paymentDate;
    };
    PaymentMethod.prototype.setPaymentDate = function (paymentDate) {
        this.paymentDate = paymentDate;
    };
    PaymentMethod.prototype.getBillId = function () {
        return this.billId;
    };
    PaymentMethod.prototype.setBillId = function (billId) {
        this.billId = billId;
    };
    return PaymentMethod;
}());
exports.default = PaymentMethod;
