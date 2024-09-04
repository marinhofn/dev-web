import { createServer } from './config/server';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import estacionamentoRoutes from './routes/estacionamentoRoutes';
import reservaRoutes from './routes/reservaRoutes';
import vagaRoutes from './routes/vagaRoutes';
import veiculoRoutes from './routes/veiculoRoutes';

const app = createServer();

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/estacionamento', estacionamentoRoutes);
app.use('/api/reserva', reservaRoutes);
app.use('/api/vaga', vagaRoutes);
app.use('/api/veiculo', veiculoRoutes);

export default app;