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
const vagaService_1 = require("../src/services/vagaService");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Vaga Routes', () => {
    let vagaServiceStub;
    beforeEach(() => {
        vagaServiceStub = sinon_1.default.createStubInstance(vagaService_1.VagaService);
    });
    afterEach(() => {
        sinon_1.default.restore();
    });
    it('should create a new vaga', () => __awaiter(void 0, void 0, void 0, function* () {
        const vagaData = { id: 'string', numero: 'A1', tipo: 'carro', disponibilidade: true, estacionamentoId: '1' };
        vagaServiceStub.createVaga.resolves(vagaData);
        const res = yield chai_1.default.request(app_1.default)
            .post('/vagas')
            .send(vagaData);
        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(vagaData);
    }));
    it('should get a vaga by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const vaga = { id: '1', numero: 'A1', tipo: 'carro', disponibilidade: true, estacionamentoId: '1' };
        vagaServiceStub.getVagaById.resolves(vaga);
        const res = yield chai_1.default.request(app_1.default)
            .get('/vagas/1');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(vaga);
    }));
    it('should update a vaga by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const vaga = { id: '1', numero: 'A1', tipo: 'carro', disponibilidade: false, estacionamentoId: '1' };
        vagaServiceStub.updateVaga.resolves(vaga);
        const res = yield chai_1.default.request(app_1.default)
            .put('/vagas/1')
            .send({ disponibilidade: false });
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(vaga);
    }));
    it('should delete a vaga by id', () => __awaiter(void 0, void 0, void 0, function* () {
        vagaServiceStub.deleteVaga.resolves();
        const res = yield chai_1.default.request(app_1.default)
            .delete('/vagas/1');
        expect(res).to.have.status(204);
    }));
    it('should list all vagas', () => __awaiter(void 0, void 0, void 0, function* () {
        const vagas = [
            { id: '1', numero: 'A1', tipo: 'carro', disponibilidade: true, estacionamentoId: '1' },
            { id: '2', numero: 'A2', tipo: 'moto', disponibilidade: false, estacionamentoId: '1' },
        ];
        vagaServiceStub.listVagas.resolves(vagas);
        const res = yield chai_1.default.request(app_1.default)
            .get('/vagas');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(vagas);
    }));
});
