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
exports.VagaService = void 0;
const vagaRepository_1 = require("../repositories/vagaRepository");
class VagaService {
    constructor() {
        this.vagaRepository = new vagaRepository_1.VagaRepository();
    }
    createVaga(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const vaga = yield this.vagaRepository.createVaga(data);
            return vaga;
        });
    }
    getVagaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vagaRepository.findById(id);
        });
    }
    updateVaga(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vagaRepository.updateVaga(id, data);
        });
    }
    deleteVaga(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vagaRepository.deleteVaga(id);
        });
    }
    listVagas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vagaRepository.listVagas();
        });
    }
}
exports.VagaService = VagaService;
