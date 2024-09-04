import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app'; 
import sinon from 'sinon';
import { EstacionamentoService } from '../src/services/estacionamentoService';

chai.use(chaiHttp);
const { expect } = chai;

describe('Estacionamento Routes', () => {
    let estacionamentoServiceStub: sinon.SinonStubbedInstance<EstacionamentoService>;

    beforeEach(() => {
        estacionamentoServiceStub = sinon.createStubInstance(EstacionamentoService);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should create a new estacionamento', async () => {
        const estacionamentoData = { id: 'string', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 100 };
        estacionamentoServiceStub.createEstacionamento.resolves(estacionamentoData);

        const res = await chai.request(app)
            .post('/estacionamentos')
            .send(estacionamentoData);

        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(estacionamentoData);
    });

    it('should get a estacionamento by id', async () => {
        const estacionamento = { id: '1', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 100 };
        estacionamentoServiceStub.getEstacionamentoById.resolves(estacionamento);

        const res = await chai.request(app)
            .get('/estacionamentos/1');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(estacionamento);
    });

    it('should return 404 if estacionamento not found', async () => {
        estacionamentoServiceStub.getEstacionamentoById.resolves(null);

        const res = await chai.request(app)
            .get('/estacionamentos/999');

        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message', 'Estacionamento not found');
    });

    it('should update a estacionamento by id', async () => {
        const estacionamento = { id: '1', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 150 };
        estacionamentoServiceStub.updateEstacionamento.resolves(estacionamento);

        const res = await chai.request(app)
            .put('/estacionamentos/1')
            .send({ capacidade: 150 });

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(estacionamento);
    });

    it('should delete a estacionamento by id', async () => {
        estacionamentoServiceStub.deleteEstacionamento.resolves();

        const res = await chai.request(app)
            .delete('/estacionamentos/1');

        expect(res).to.have.status(204);
    });

    it('should list all estacionamentos', async () => {
        const estacionamentos = [
            { id: '1', nome: 'Estacionamento 1', endereco: 'Rua A', capacidade: 100 },
            { id: '2', nome: 'Estacionamento 2', endereco: 'Rua B', capacidade: 200 },
        ];
        estacionamentoServiceStub.listEstacionamentos.resolves(estacionamentos);

        const res = await chai.request(app)
            .get('/estacionamentos');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(estacionamentos);
    });
});
