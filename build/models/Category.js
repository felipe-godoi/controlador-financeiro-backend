"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = /** @class */ (function () {
    function Category(id, description, isActive, creationDate, updateDate, userId) {
        this.id = id;
        this.description = description;
        this.isActive = isActive;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.userId = userId;
    }
    Category.prototype.getId = function () {
        return this.id;
    };
    Category.prototype.setId = function (id) {
        this.id = id;
    };
    Category.prototype.getDescription = function () {
        return this.description;
    };
    Category.prototype.setDescription = function (description) {
        this.description = description;
    };
    Category.prototype.getIsActive = function () {
        return this.isActive;
    };
    Category.prototype.setIsActive = function (isActive) {
        this.isActive = isActive;
    };
    Category.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    Category.prototype.setCreationDate = function (creationDate) {
        this.creationDate = creationDate;
    };
    Category.prototype.getUpdateDate = function () {
        return this.updateDate;
    };
    Category.prototype.setUpdateDate = function (updateDate) {
        this.updateDate = updateDate;
    };
    Category.prototype.getUserId = function () {
        return this.userId;
    };
    Category.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    return Category;
}());
exports.default = Category;
