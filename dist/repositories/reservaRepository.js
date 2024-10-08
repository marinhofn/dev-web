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
exports.ReservaRepository = void 0;
const client_1 = require("@prisma/client");
class ReservaRepository {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.reserva.findUnique({
                where: { id },
            });
        });
    }
    createReserva(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.reserva.create({
                data,
            });
        });
    }
    updateReserva(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.reserva.update({
                where: { id },
                data,
            });
        });
    }
    deleteReserva(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.reserva.delete({
                where: { id },
            });
        });
    }
    listReservas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.reserva.findMany();
        });
    }
}
exports.ReservaRepository = ReservaRepository;
