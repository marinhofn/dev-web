import { createServer } from './config/server';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import estacionamentoRoutes from './routes/estacionamentoRoutes';
import reservaRoutes from './routes/reservaRoutes';
import vagaRoutes from './routes/vagaRoutes';
import veiculoRoutes from './routes/veiculoRoutes';

const app = createServer();

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', estacionamentoRoutes);
app.use('/api', reservaRoutes);
app.use('/api', vagaRoutes);
app.use('/api', veiculoRoutes);


export default app;