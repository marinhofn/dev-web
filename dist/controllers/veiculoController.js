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
exports.VeiculoController = void 0;
const veiculoService_1 = require("../services/veiculoService");
class VeiculoController {
    constructor() {
        this.veiculoService = new veiculoService_1.VeiculoService();
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const veiculo = yield this.veiculoService.createVeiculo(request.body);
                return response.status(201).json(veiculo);
            }
            catch (error) {
                console.error('Error creating veiculo:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getVeiculo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const veiculo = yield this.veiculoService.getVeiculoById(id);
                if (!veiculo) {
                    return response.status(404).json({ message: 'Veiculo not found' });
                }
                return response.status(200).json(veiculo);
            }
            catch (error) {
                console.error('Error fetching veiculo:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    updateVeiculo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const veiculo = yield this.veiculoService.updateVeiculo(id, request.body);
                return response.status(200).json(veiculo);
            }
            catch (error) {
                console.error('Error updating veiculo:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteVeiculo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                yield this.veiculoService.deleteVeiculo(id);
                return response.status(204).send();
            }
            catch (error) {
                console.error('Error deleting veiculo:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    listVeiculos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const veiculos = yield this.veiculoService.listVeiculos();
                return response.status(200).json(veiculos);
            }
            catch (error) {
                console.error('Error listing veiculos:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.VeiculoController = VeiculoController;
