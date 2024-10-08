"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vagaController_1 = require("../controllers/vagaController");
const router = (0, express_1.Router)();
const vagaController = new vagaController_1.VagaController();
router.post('/createVaga', (req, res) => vagaController.create(req, res));
router.get('/vagas', (req, res) => vagaController.listVagas(req, res));
router.get('/vagas/:id', (req, res) => vagaController.getVaga(req, res));
router.put('/vagas/:id', (req, res) => vagaController.updateVaga(req, res));
router.delete('/vagas/:id', (req, res) => vagaController.deleteVaga(req, res));
exports.default = router;
