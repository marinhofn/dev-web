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
exports.VeiculoRepository = void 0;
const client_1 = require("@prisma/client");
class VeiculoRepository {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.veiculo.findUnique({
                where: { id },
            });
        });
    }
    createVeiculo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.veiculo.create({
                data,
            });
        });
    }
    updateVeiculo(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.veiculo.update({
                where: { id },
                data,
            });
        });
    }
    deleteVeiculo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.veiculo.delete({
                where: { id },
            });
        });
    }
    listVeiculos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.veiculo.findMany();
        });
    }
}
exports.VeiculoRepository = VeiculoRepository;