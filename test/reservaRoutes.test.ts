import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import sinon from 'sinon';
import { ReservaService } from '../src/services/reservaService';

chai.use(chaiHttp);
const { expect } = chai;

describe('Reserva Routes', () => {
    let reservaServiceStub: sinon.SinonStubbedInstance<ReservaService>;

    beforeEach(() => {
        reservaServiceStub = sinon.createStubInstance(ReservaService);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should create a new reserva', async () => {
        const reservaData = {
            id: 'string',
            vagaId: '1',
            veiculoId: '1',
            dataInicio: '2024-09-01T10:00:00Z',
            dataFim: '2024-09-01T12:00:00Z',
        };
        reservaServiceStub.createReserva.resolves(reservaData);

        const res = await chai.request(app)
            .post('/reservas')
            .send(reservaData);

        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(reservaData);
    });

    it('should get a reserva by id', async () => {
        const reserva = {
            id: '1',
            vagaId: '1',
            veiculoId: '1',
            dataInicio: '2024-09-01T10:00:00Z',
            dataFim: '2024-09-01T12:00:00Z',
        };
        reservaServiceStub.getReservaById.resolves(reserva);

        const res = await chai.request(app)
            .get('/reservas/1');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(reserva);
    });

    it('should update a reserva by id', async () => {
        const updatedReserva = {
            id: '1',
            vagaId: '1',
            veiculoId: '1',
            dataInicio: '2024-09-01T11:00:00Z',
            dataFim: '2024-09-01T13:00:00Z',
        };
        reservaServiceStub.updateReserva.resolves(updatedReserva);

        const res = await chai.request(app)
            .put('/reservas/1')
            .send({
                dataInicio: '2024-09-01T11:00:00Z',
                dataFim: '2024-09-01T13:00:00Z',
            });

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(updatedReserva);
    });

    it('should delete a reserva by id', async () => {
        reservaServiceStub.deleteReserva.resolves();

        const res = await chai.request(app)
            .delete('/reservas/1');

        expect(res).to.have.status(204);
    });

    it('should list all reservas', async () => {
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

        const res = await chai.request(app)
            .get('/reservas');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(reservas);
    });
});
