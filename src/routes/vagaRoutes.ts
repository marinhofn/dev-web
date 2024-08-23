import { Router } from 'express';
import { VagaController } from '../controllers/vagaController';

const router = Router();
const vagaController = new VagaController();

router.post('/vagas', (req, res) => vagaController.create(req, res));
router.get('/vagas', (req, res) => vagaController.listVagas(req, res));
router.get('/vagas/:id', (req, res) => vagaController.getVaga(req, res));
router.put('/vagas/:id', (req, res) => vagaController.updateVaga(req, res));
router.delete('/vagas/:id', (req, res) => vagaController.deleteVaga(req, res));

export default router;
