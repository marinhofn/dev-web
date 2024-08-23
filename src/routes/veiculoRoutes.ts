import { Router } from 'express';
import { VeiculoController } from '../controllers/veiculoController';

const router = Router();
const veiculoController = new VeiculoController();

router.post('/veiculos', (req, res) => veiculoController.create(req, res));
router.get('/veiculos', (req, res) => veiculoController.listVeiculos(req, res));
router.get('/veiculos/:id', (req, res) => veiculoController.getVeiculo(req, res));
router.put('/veiculos/:id', (req, res) => veiculoController.updateVeiculo(req, res));
router.delete('/veiculos/:id', (req, res) => veiculoController.deleteVeiculo(req, res));

export default router;
