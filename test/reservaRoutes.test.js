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
const reservaService_1 = require("../src/services/reservaService");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Reserva Routes', () => {
    let reservaServiceStub;
    beforeEach(() => {
        reservaServiceStub = sinon_1.default.createStubInstance(reservaService_1.ReservaService);
    });
    afterEach(() => {
        sinon_1.default.restore();
    });
    it('should create a new reserva', () => __awaiter(void 0, void 0, void 0, function* () {
        const reservaData = {
            id: 'string',
            vagaId: '1',
            veiculoId: '1',
            dataInicio: '2024-09-01T10:00:00Z',
            dataFim: '2024-09-01T12:00:00Z',
        };
        reservaServiceStub.createReserva.resolves(reservaData);
        const res = yield chai_1.default.request(app_1.default)
            .post('/reservas')
            .send(reservaData);
        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(reservaData);
    }));
    it('should get a reserva by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const reserva = {
            id: '1',
            vagaId: '1',
            veiculoId: '1',
            dataInicio: '2024-09-01T10:00:00Z',
            dataFim: '2024-09-01T12:00:00Z',
        };
        reservaServiceStub.getReservaById.resolves(reserva);
        const res = yield chai_1.default.request(app_1.default)
            .get('/reservas/1');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(reserva);
    }));
    it('should update a reserva by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedReserva = {
            id: '1',
            vagaId: '1',
            veiculoId: '1',
            dataInicio: '2024-09-01T11:00:00Z',
            dataFim: '2024-09-01T13:00:00Z',
        };
        reservaServiceStub.updateReserva.resolves(updatedReserva);
        const res = yield chai_1.default.request(app_1.default)
            .put('/reservas/1')
            .send({
            dataInicio: '2024-09-01T11:00:00Z',
            dataFim: '2024-09-01T13:00:00Z',
        });
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(updatedReserva);
    }));
    it('should delete a reserva by id', () => __awaiter(void 0, void 0, void 0, function* () {
        reservaServiceStub.deleteReserva.resolves();
        const res = yield chai_1.default.request(app_1.default)
            .delete('/reservas/1');
        expect(res).to.have.status(204);
    }));
    it('should list all reservas', () => __awaiter(void 0, void 0, void 0, function* () {
        const reservas = [
            {
                id: '1',
                vagaId: '1',
                veiculoId: '1',
                dataInicio: '2024-09-01T10:00:00Z',
                dataFim: '2024-09-01T12:00:00Z',
            },
            {
                id: '2',
                vagaId: '2',
                veiculoId: '2',
                dataInicio: '2024-09-02T10:00:00Z',
                dataFim: '2024-09-02T12:00:00Z',
            },
        ];
        reservaServiceStub.listReservas.resolves(reservas);
        const res = yield chai_1.default.request(app_1.default)
            .get('/reservas');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(reservas);
    }));
});
