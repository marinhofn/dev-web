"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacionamentoController = void 0;
const estacionamentoService_1 = require("../services/estacionamentoService");
class EstacionamentoController {
    constructor() {
        this.estacionamentoService = new estacionamentoService_1.EstacionamentoService();
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estacionamento = yield this.estacionamentoService.createEstacionamento(request.body);
                return response.status(201).json(estacionamento);
            }
            catch (error) {
                console.error('Error creating estacionamento:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getEstacionamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const estacionamento = yield this.estacionamentoService.getEstacionamentoById(id);
                if (!estacionamento) {
                    return response.status(404).json({ message: 'Estacionamento not found' });
                }
                return response.status(200).json(estacionamento);
            }
            catch (error) {
                console.error('Error fetching estacionamento:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    updateEstacionamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const estacionamento = yield this.estacionamentoService.updateEstacionamento(id, request.body);
                return response.status(200).json(estacionamento);
            }
            catch (error) {
                console.error('Error updating estacionamento:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteEstacionamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                yield this.estacionamentoService.deleteEstacionamento(id);
                return response.status(204).send();
            }
            catch (error) {
                console.error('Error deleting estacionamento:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    listEstacionamentos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estacionamentos = yield this.estacionamentoService.listEstacionamentos();
                return response.status(200).json(estacionamentos);
            }
            catch (error) {
                console.error('Error listing estacionamentos:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.EstacionamentoController = EstacionamentoController;
