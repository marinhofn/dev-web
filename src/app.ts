import { createServer } from './config/server';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = createServer();

app.use('/api', userRoutes);
app.use('/api', authRoutes);

export default app;