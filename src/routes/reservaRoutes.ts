import { Router } from 'express';
import { ReservaController } from '../controllers/reservaController';

const router = Router();
const reservaController = new ReservaController();

router.post('/reservas', (req, res) => reservaController.create(req, res));
router.get('/reservas', (req, res) => reservaController.listReservas(req, res));
router.get('/reservas/:id', (req, res) => reservaController.getReserva(req, res));
router.put('/reservas/:id', (req, res) => reservaController.updateReserva(req, res));
router.delete('/reservas/:id', (req, res) => reservaController.deleteReserva(req, res));

export default router;
