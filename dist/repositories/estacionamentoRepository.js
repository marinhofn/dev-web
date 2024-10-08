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
exports.EstacionamentoRepository = void 0;
const client_1 = require("@prisma/client");
class EstacionamentoRepository {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.estacionamento.findUnique({
                where: { id },
            });
        });
    }
    createEstacionamento(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.estacionamento.create({
                data,
            });
        });
    }
    updateEstacionamento(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.estacionamento.update({
                where: { id },
                data,
            });
        });
    }
    deleteEstacionamento(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.estacionamento.delete({
                where: { id },
            });
        });
    }
    listEstacionamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.estacionamento.findMany();
        });
    }
}
exports.EstacionamentoRepository = EstacionamentoRepository;
