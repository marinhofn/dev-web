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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userRepository_1 = require("../repositories/userRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.userRepository = new userRepository_1.UserRepository();
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
            const user = yield this.userRepository.createUser(Object.assign(Object.assign({}, data), { password: hashedPassword }));
            return user;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findById(id);
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.password) {
                data.password = yield bcrypt_1.default.hash(data.password, 10);
            }
            return yield this.userRepository.updateUser(id, data);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.deleteUser(id);
        });
    }
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.listUsers();
        });
    }
}
exports.UserService = UserService;
