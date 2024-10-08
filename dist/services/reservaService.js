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
exports.ReservaService = void 0;
const reservaRepository_1 = require("../repositories/reservaRepository");
class ReservaService {
    constructor() {
        this.reservaRepository = new reservaRepository_1.ReservaRepository();
    }
    createReserva(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const reserva = yield this.reservaRepository.createReserva(data);
            return reserva;
        });
    }
    getReservaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reservaRepository.findById(id);
        });
    }
    updateReserva(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reservaRepository.updateReserva(id, data);
        });
    }
    deleteReserva(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reservaRepository.deleteReserva(id);
        });
    }
    listReservas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reservaRepository.listReservas();
        });
    }
}
exports.ReservaService = ReservaService;
