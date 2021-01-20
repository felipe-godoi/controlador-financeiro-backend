"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var database_1 = __importDefault(require("../config/database"));
var Response = /** @class */ (function () {
    function Response(response, error) {
        this.response = response;
        this.error = error;
    }
    Response.prototype.toJson = function () {
        var json = {
            "response": this.response,
            "error": this.error
        };
        return json;
    };
    return Response;
}());
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    return Login;
}());
exports.Login = Login;
var User = /** @class */ (function () {
    function User(id, username, password, email, name, creationDate, updateDate, removeDate, isActive) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.removeDate = removeDate;
        this.isActive = isActive;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    User.prototype.setCreationDate = function (creationDate) {
        this.creationDate = creationDate;
    };
    User.prototype.getUpdateDate = function () {
        return this.updateDate;
    };
    User.prototype.setUpdateDate = function (updateDate) {
        this.updateDate = updateDate;
    };
    User.prototype.getRemoveDate = function () {
        return this.removeDate;
    };
    User.prototype.setRemoveDate = function (removeDate) {
        this.removeDate = removeDate;
    };
    User.prototype.isIsActive = function () {
        return this.isActive;
    };
    User.prototype.setIsActive = function (isActive) {
        this.isActive = isActive;
    };
    User.fromJson = function (json) {
        return new User(json.id, json.username, json.password, json.email, json.name, json.creationDate, json.updateDate, json.removeDate, json.isActive);
    };
    User.prototype.save = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "\n            INSERT INTO USERS(\n                username,\n                password,\n                email,\n                name,\n                creationDate,\n                updateDate,\n                removeDate,\n                isActive\n            ) VALUES (?,?,?,?,?,?,?,?)\n            ";
            var params = [
                _this.username,
                _this.password,
                _this.email,
                _this.name,
                _this.creationDate,
                _this.updateDate,
                _this.removeDate,
                _this.isActive
            ];
            database_1.default.query(query, params, function (err, result) {
                var response;
                if (err) {
                    response = new Response(err.stack, true);
                    reject(response);
                }
                response = new Response(result.insertId, false);
                resolve(response);
            });
        });
    };
    User.getAll = function () {
        return new Promise(function (resolve, reject) {
            var query = "SELECT * FROM USERS";
            database_1.default.query(query, [], function (err, result) {
                var users = [];
                var response;
                if (err) {
                    response = new Response(err.stack, true);
                    reject(response);
                }
                for (var i = 0; i < result.length; i++) {
                    var element = User.fromJson(result[i]);
                    users.push(element);
                }
                response = new Response(users, false);
                resolve(response);
            });
        });
    };
    User.auth = function (login) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var queryUsername, queryEmail, credentials, response;
            return __generator(this, function (_a) {
                queryUsername = "select * from USERS where username=? and password=?";
                queryEmail = "select * from USERS where email=? and password=?";
                credentials = [
                    login.username,
                    login.password
                ];
                database_1.default.query(queryUsername, credentials, function (err, result) {
                    if (err) {
                        return;
                    }
                    if (result.length == 1) {
                        response = new Response(result[0], false);
                        resolve(response);
                    }
                    database_1.default.query(queryEmail, credentials, function (err, result) {
                        if (err) {
                            return;
                        }
                        if (result.length == 1) {
                            response = new Response(result[0], false);
                            resolve(response);
                        }
                        response = new Response("Usuário ou senha não encontrados.", true);
                        resolve(response);
                    });
                });
                return [2 /*return*/];
            });
        }); });
    };
    User.getOneById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var query, response;
            return __generator(this, function (_a) {
                query = "select * from USERS where id=?";
                database_1.default.query(query, [id], function (err, result) {
                    if (err) {
                        return;
                    }
                    if (result.length == 1) {
                        response = new Response(result[0], false);
                        resolve(response);
                    }
                    response = new Response("Id não encontrado.", true);
                    resolve(response);
                });
                return [2 /*return*/];
            });
        }); });
    };
    return User;
}());
exports.default = User;
