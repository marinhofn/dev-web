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
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../src/app"));
const sinon_1 = __importDefault(require("sinon"));
const userService_1 = require("../src/services/userService");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('User Routes', () => {
    let userServiceStub;
    beforeEach(() => {
        userServiceStub = sinon_1.default.createStubInstance(userService_1.UserService);
    });
    afterEach(() => {
        sinon_1.default.restore();
    });
    it('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = { id: 'string', nome: 'Jose', email: 'jose@example.com', telefone: '12345678', password: 'password', document: '1234567890' };
        userServiceStub.createUser.resolves(userData);
        const res = yield chai_1.default.request(app_1.default)
            .post('/users')
            .send(userData);
        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(userData);
    }));
    it('should get a user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { id: '1', nome: 'Jose', email: 'jose@example.com', telefone: '12345678', document: '1234567890' };
        userServiceStub.getUserById.resolves(user);
        const res = yield chai_1.default.request(app_1.default)
            .get('/users/1');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(user);
    }));
    it('should update a user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { id: '1', nome: 'Jose', email: 'jose@example.com', telefone: '87654321', document: '1234567890' };
        userServiceStub.updateUser.resolves(user);
        const res = yield chai_1.default.request(app_1.default)
            .put('/users/1')
            .send({ telefone: '87654321' });
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(user);
    }));
    it('should delete a user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        userServiceStub.deleteUser.resolves();
        const res = yield chai_1.default.request(app_1.default)
            .delete('/users/1');
        expect(res).to.have.status(204);
    }));
    it('should list all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const users = [
            { id: '1', nome: 'Jose', email: 'jose@example.com', telefone: '12345678', document: '1234567890' },
            { id: '2', nome: 'Maria', email: 'maria@example.com', telefone: '87654321', document: '0987654321' },
        ];
        userServiceStub.listUsers.resolves(users);
        const res = yield chai_1.default.request(app_1.default)
            .get('/users');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(users);
    }));
});
