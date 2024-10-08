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
exports.VagaController = void 0;
const vagaService_1 = require("../services/vagaService");
class VagaController {
    constructor() {
        this.vagaService = new vagaService_1.VagaService();
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Creating vaga');
            try {
                const vaga = yield this.vagaService.createVaga(request.body);
                return response.status(201).json(vaga);
            }
            catch (error) {
                console.error('Error creating vaga:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getVaga(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const vaga = yield this.vagaService.getVagaById(id);
                if (!vaga) {
                    return response.status(404).json({ message: 'Vaga not found' });
                }
                return response.status(200).json(vaga);
            }
            catch (error) {
                console.error('Error fetching vaga:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    updateVaga(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const vaga = yield this.vagaService.updateVaga(id, request.body);
                return response.status(200).json(vaga);
            }
            catch (error) {
                console.error('Error updating vaga:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteVaga(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                yield this.vagaService.deleteVaga(id);
                return response.status(204).send();
            }
            catch (error) {
                console.error('Error deleting vaga:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    listVagas(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vagas = yield this.vagaService.listVagas();
                return response.status(200).json(vagas);
            }
            catch (error) {
                console.error('Error listing vagas:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.VagaController = VagaController;
