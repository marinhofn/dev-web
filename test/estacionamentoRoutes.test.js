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
const estacionamentoService_1 = require("../src/services/estacionamentoService");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Estacionamento Routes', () => {
    let estacionamentoServiceStub;
    beforeEach(() => {
        estacionamentoServiceStub = sinon_1.default.createStubInstance(estacionamentoService_1.EstacionamentoService);
    });
    afterEach(() => {
        sinon_1.default.restore();
    });
    it('should create a new estacionamento', () => __awaiter(void 0, void 0, void 0, function* () {
        const estacionamentoData = { id: 'string', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 100 };
        estacionamentoServiceStub.createEstacionamento.resolves(estacionamentoData);
        const res = yield chai_1.default.request(app_1.default)
            .post('/estacionamentos')
            .send(estacionamentoData);
        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(estacionamentoData);
    }));
    it('should get a estacionamento by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const estacionamento = { id: '1', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 100 };
        estacionamentoServiceStub.getEstacionamentoById.resolves(estacionamento);
        const res = yield chai_1.default.request(app_1.default)
            .get('/estacionamentos/1');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(estacionamento);
    }));
    it('should return 404 if estacionamento not found', () => __awaiter(void 0, void 0, void 0, function* () {
        estacionamentoServiceStub.getEstacionamentoById.resolves(null);
        const res = yield chai_1.default.request(app_1.default)
            .get('/estacionamentos/999');
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message', 'Estacionamento not found');
    }));
    it('should update a estacionamento by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const estacionamento = { id: '1', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 150 };
        estacionamentoServiceStub.updateEstacionamento.resolves(estacionamento);
        const res = yield chai_1.default.request(app_1.default)
            .put('/estacionamentos/1')
            .send({ capacidade: 150 });
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(estacionamento);
    }));
    it('should delete a estacionamento by id', () => __awaiter(void 0, void 0, void 0, function* () {
        estacionamentoServiceStub.deleteEstacionamento.resolves();
        const res = yield chai_1.default.request(app_1.default)
            .delete('/estacionamentos/1');
        expect(res).to.have.status(204);
    }));
    it('should list all estacionamentos', () => __awaiter(void 0, void 0, void 0, function* () {
        const estacionamentos = [
            { id: '1', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 100 },
            { id: '2', nome: 'Estacionamento 2', endereco: 'Rua B', capacidade: 200 },
        ];
        estacionamentoServiceStub.listEstacionamentos.resolves(estacionamentos);
        const res = yield chai_1.default.request(app_1.default)
            .get('/estacionamentos');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(estacionamentos);
    }));
});
