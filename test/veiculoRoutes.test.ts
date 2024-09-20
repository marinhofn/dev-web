import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import sinon from 'sinon';
import { VeiculoService } from '../src/services/veiculoService';

chai.use(chaiHttp);
const { expect } = chai;

describe('Veiculo Routes', () => {
    let veiculoServiceStub: sinon.SinonStubbedInstance<VeiculoService>;

    beforeEach(() => {
        veiculoServiceStub = sinon.createStubInstance(VeiculoService);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should create a new veiculo', async () => {
        const veiculoData = { id: 'string', placa: 'ABC1234', modelo: 'Sedan', cor: 'Azul', userId: '1' };
        veiculoServiceStub.createVeiculo.resolves(veiculoData);

        const res = await chai.request(app)
            .post('/veiculos')
            .send(veiculoData);

        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(veiculoData);
    });

    it('should get a veiculo by id', async () => {
        const veiculo = { id: '1', placa: 'ABC1234', modelo: 'Sedan', cor: 'Azul', userId: '1' };
        veiculoServiceStub.getVeiculoById.resolves(veiculo);

        const res = await chai.request(app)
            .get('/veiculos/1');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(veiculo);
    });

    it('should update a veiculo by id', async () => {
        const veiculo = { id: '1', placa: 'ABC1234', modelo: 'SUV', cor: 'Vermelho', userId: '1' };
        veiculoServiceStub.updateVeiculo.resolves(veiculo);

        const res = await chai.request(app)
            .put('/veiculos/1')
            .send({ modelo: 'SUV', cor: 'Vermelho' });

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(veiculo);
    });

    it('should delete a veiculo by id', async () => {
        veiculoServiceStub.deleteVeiculo.resolves();

        const res = await chai.request(app)
            .delete('/veiculos/1');

        expect(res).to.have.status(204);
    });

    it('should list all veiculos', async () => {
        const veiculos = [
            { id: '1', placa: 'ABC1234', modelo: 'Sedan', cor: 'Azul', userId: '1' },
            { id: '2', placa: 'XYZ5678', modelo: 'SUV', cor: 'Vermelho', userId: '2' },
        ];
        veiculoServiceStub.listVeiculos.resolves(veiculos);

        const res = await chai.request(app)
            .get('/veiculos');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(veiculos);
    });
});
