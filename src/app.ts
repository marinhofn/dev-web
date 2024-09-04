import { createServer } from './config/server';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import estacionamentoRoutes from './routes/estacionamentoRoutes';
import reservaRoutes from './routes/reservaRoutes';
import vagaRoutes from './routes/vagaRoutes';
import veiculoRoutes from './routes/veiculoRoutes';

const app = createServer();

app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/estacionamento', estacionamentoRoutes);
app.use('/reserva', reservaRoutes);
app.use('/vaga', vagaRoutes);
app.use('/veiculo', veiculoRoutes);

export default app;