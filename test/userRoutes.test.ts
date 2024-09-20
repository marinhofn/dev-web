import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import sinon from 'sinon';
import { UserService } from '../src/services/userService';

chai.use(chaiHttp);
const { expect } = chai;

describe('User Routes', () => {
    let userServiceStub: sinon.SinonStubbedInstance<UserService>;

    beforeEach(() => {
        userServiceStub = sinon.createStubInstance(UserService);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should create a new user', async () => {
        const userData = { id: 'string', nome: 'Jose', email: 'jose@example.com', telefone: '12345678', password: 'password', document: '1234567890' };
        userServiceStub.createUser.resolves(userData);

        const res = await chai.request(app)
            .post('/users')
            .send(userData);

        expect(res).to.have.status(201);
        expect(res.body).to.deep.equal(userData);
    });

    it('should get a user by id', async () => {
        const user = { id: '1', nome: 'Jose', email: 'jose@example.com', telefone: '12345678', document: '1234567890' };
        userServiceStub.getUserById.resolves(user);

        const res = await chai.request(app)
            .get('/users/1');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(user);
    });

    it('should update a user by id', async () => {
        const user = { id: '1', nome: 'Jose', email: 'jose@example.com', telefone: '87654321', document: '1234567890' };
        userServiceStub.updateUser.resolves(user);

        const res = await chai.request(app)
            .put('/users/1')
            .send({ telefone: '87654321' });

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(user);
    });

    it('should delete a user by id', async () => {
        userServiceStub.deleteUser.resolves();

        const res = await chai.request(app)
            .delete('/users/1');

        expect(res).to.have.status(204);
    });

    it('should list all users', async () => {
        const users = [
            { id: '1', nome: 'Jose', email: 'jose@example.com', telefone: '12345678', document: '1234567890' },
            { id: '2', nome: 'Maria', email: 'maria@example.com', telefone: '87654321', document: '0987654321' },
        ];
        userServiceStub.listUsers.resolves(users);

        const res = await chai.request(app)
            .get('/users');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(users);
    });
});
