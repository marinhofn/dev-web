import { Router } from 'express';
import { EstacionamentoController } from '../controllers/estacionamentoController';

const router = Router();
const estacionamentoController = new EstacionamentoController();

router.post('/estacionamentos', (req, res) => estacionamentoController.create(req, res));
router.get('/estacionamentos', (req, res) => estacionamentoController.listEstacionamentos(req, res));
router.get('/estacionamentos/:id', (req, res) => estacionamentoController.getEstacionamento(req, res));
router.put('/estacionamentos/:id', (req, res) => estacionamentoController.updateEstacionamento(req, res));
router.delete('/estacionamentos/:id', (req, res) => estacionamentoController.deleteEstacionamento(req, res));

export default router;
