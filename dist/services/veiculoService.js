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
exports.VeiculoService = void 0;
const veiculoRepository_1 = require("../repositories/veiculoRepository");
class VeiculoService {
    constructor() {
        this.veiculoRepository = new veiculoRepository_1.VeiculoRepository();
    }
    createVeiculo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const veiculo = yield this.veiculoRepository.createVeiculo(data);
            return veiculo;
        });
    }
    getVeiculoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.veiculoRepository.findById(id);
        });
    }
    updateVeiculo(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.veiculoRepository.updateVeiculo(id, data);
        });
    }
    deleteVeiculo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.veiculoRepository.deleteVeiculo(id);
        });
    }
    listVeiculos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.veiculoRepository.listVeiculos();
        });
    }
}
exports.VeiculoService = VeiculoService;
