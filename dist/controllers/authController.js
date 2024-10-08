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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const authService_1 = require("../services/authService");
class AuthController {
    constructor() {
        this.authService = new authService_1.AuthService();
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { document, password } = request.body;
                const result = yield this.authService.login(document, password);
                if (result.success) {
                    return response.json({ message: 'Login successful', token: result.token });
                }
                else {
                    return response.status(401).json({ message: 'Invalid credentials' });
                }
            }
            catch (error) {
                console.error('Error during login:', error);
                return response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    validateToken(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = request.headers['token'];
                const isValid = yield this.authService.validateToken(token);
                if (isValid) {
                    return next();
                }
                else {
                    return response.status(401).json({ message: 'Invalid or expired token' });
                }
            }
            catch (error) {
                console.error('Error validating token:', error);
                return response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    logout(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = request.headers['token'];
                yield this.authService.logout(token);
                return response.status(204).send();
            }
            catch (error) {
                console.error('Error logging out:', error);
                return response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    listSessions(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sessions = yield this.authService.listSessions();
                return response.status(200).json(sessions);
            }
            catch (error) {
                console.error('Error listing sessions:', error);
                return response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
}
exports.AuthController = AuthController;
