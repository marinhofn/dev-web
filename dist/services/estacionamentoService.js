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
exports.EstacionamentoService = void 0;
const estacionamentoRepository_1 = require("../repositories/estacionamentoRepository");
class EstacionamentoService {
    constructor() {
        this.estacionamentoRepository = new estacionamentoRepository_1.EstacionamentoRepository();
    }
    createEstacionamento(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const estacionamento = yield this.estacionamentoRepository.createEstacionamento(data);
            return estacionamento;
        });
    }
    getEstacionamentoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.estacionamentoRepository.findById(id);
        });
    }
    updateEstacionamento(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.estacionamentoRepository.updateEstacionamento(id, data);
        });
    }
    deleteEstacionamento(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.estacionamentoRepository.deleteEstacionamento(id);
        });
    }
    listEstacionamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.estacionamentoRepository.listEstacionamentos();
        });
    }
}
exports.EstacionamentoService = EstacionamentoService;
