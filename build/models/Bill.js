"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bill = /** @class */ (function () {
    function Bill(id, name, dueDate, isRecursive, nameType, userId, isActive, endRecursion, paymenyMethod, totalPrice, installmentNumber, entry, categoryId) {
        this.id = id;
        this.name = name;
        this.dueDate = dueDate;
        this.isRecursive = isRecursive;
        this.nameType = nameType;
        this.userId = userId;
        this.isActive = isActive;
        this.endRecursion = endRecursion;
        this.paymenyMethod = paymenyMethod;
        this.totalPrice = totalPrice;
        this.installmentNumber = installmentNumber;
        this.entry = entry;
        this.categoryId = categoryId;
    }
    Bill.prototype.getId = function () {
        return this.id;
    };
    Bill.prototype.setId = function (id) {
        this.id = id;
    };
    Bill.prototype.getName = function () {
        return this.name;
    };
    Bill.prototype.setName = function (name) {
        this.name = name;
    };
    Bill.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    Bill.prototype.setTotalPrice = function (price) {
        this.totalPrice = price;
    };
    Bill.prototype.getDueDate = function () {
        return this.dueDate;
    };
    Bill.prototype.setDueDate = function (dueDate) {
        this.dueDate = dueDate;
    };
    Bill.prototype.getIsRecursive = function () {
        return this.isRecursive;
    };
    Bill.prototype.setIsRecursive = function (isRecursive) {
        this.isRecursive = isRecursive;
    };
    Bill.prototype.getNameType = function () {
        return this.nameType;
    };
    Bill.prototype.setNameType = function (nameType) {
        this.nameType = nameType;
    };
    Bill.prototype.getUserId = function () {
        return this.userId;
    };
    Bill.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    Bill.prototype.getIsActive = function () {
        return this.isActive;
    };
    Bill.prototype.setIsActive = function (isActive) {
        this.isActive = isActive;
    };
    Bill.prototype.getEndRecursion = function () {
        return this.endRecursion;
    };
    Bill.prototype.setEndRecursion = function (endRecursion) {
        this.endRecursion = endRecursion;
    };
    Bill.prototype.getPaymenyMethod = function () {
        return this.paymenyMethod;
    };
    Bill.prototype.setPaymenyMethod = function (paymenyMethod) {
        this.paymenyMethod = paymenyMethod;
    };
    Bill.prototype.getInstallmentNumber = function () {
        return this.installmentNumber;
    };
    Bill.prototype.setInstallmentNumber = function (installmentNumber) {
        this.installmentNumber = installmentNumber;
    };
    Bill.prototype.getEntry = function () {
        return this.entry;
    };
    Bill.prototype.setEntry = function (entry) {
        this.entry = entry;
    };
    Bill.prototype.getCategoryId = function () {
        return this.categoryId;
    };
    Bill.prototype.setCategoryId = function (categoryId) {
        this.categoryId = categoryId;
    };
    return Bill;
}());
exports.default = Bill;
