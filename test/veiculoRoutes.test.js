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
const veiculoService_1 = require("../src/services/veiculoService");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Veiculo Routes', () => {
    let veiculoServiceStub;
    beforeEach(() => {
        veiculoServiceStub = sinon_1.default.createStubInstance(veiculoService_1.VeiculoService);
    });
    afterEach(() => {
        sinon_1.default.restore();
    });
    it('should create a new veiculo', () => __awaiter(void 0, void 0, void 0, function* () {
        const veiculoData = { id: 'string', placa: 'ABC1234', modelo: 'Sedan', cor: 'Azul', userId: '1' };
        veiculoServiceStub.createVeiculo.resolves(veiculoData);
        const res = yield chai_1.default.request(app_1.default)
            .post('/veiculos')
            .send(veiculoData);
        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(veiculoData);
    }));
    it('should get a veiculo by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const veiculo = { id: '1', placa: 'ABC1234', modelo: 'Sedan', cor: 'Azul', userId: '1' };
        veiculoServiceStub.getVeiculoById.resolves(veiculo);
        const res = yield chai_1.default.request(app_1.default)
            .get('/veiculos/1');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(veiculo);
    }));
    it('should update a veiculo by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const veiculo = { id: '1', placa: 'ABC1234', modelo: 'SUV', cor: 'Vermelho', userId: '1' };
        veiculoServiceStub.updateVeiculo.resolves(veiculo);
        const res = yield chai_1.default.request(app_1.default)
            .put('/veiculos/1')
            .send({ modelo: 'SUV', cor: 'Vermelho' });
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(veiculo);
    }));
    it('should delete a veiculo by id', () => __awaiter(void 0, void 0, void 0, function* () {
        veiculoServiceStub.deleteVeiculo.resolves();
        const res = yield chai_1.default.request(app_1.default)
            .delete('/veiculos/1');
        expect(res).to.have.status(204);
    }));
    it('should list all veiculos', () => __awaiter(void 0, void 0, void 0, function* () {
        const veiculos = [
            { id: '1', placa: 'ABC1234', modelo: 'Sedan', cor: 'Azul', userId: '1' },
            { id: '2', placa: 'XYZ5678', modelo: 'SUV', cor: 'Vermelho', userId: '2' },
        ];
        veiculoServiceStub.listVeiculos.resolves(veiculos);
        const res = yield chai_1.default.request(app_1.default)
            .get('/veiculos');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(veiculos);
    }));
});
