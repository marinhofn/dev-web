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
exports.ReservaController = void 0;
const reservaService_1 = require("../services/reservaService");
class ReservaController {
    constructor() {
        this.reservaService = new reservaService_1.ReservaService();
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reserva = yield this.reservaService.createReserva(request.body);
                return response.status(201).json(reserva);
            }
            catch (error) {
                console.error('Error creating reserva:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getReserva(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const reserva = yield this.reservaService.getReservaById(id);
                if (!reserva) {
                    return response.status(404).json({ message: 'Reserva not found' });
                }
                return response.status(200).json(reserva);
            }
            catch (error) {
                console.error('Error fetching reserva:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    updateReserva(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const reserva = yield this.reservaService.updateReserva(id, request.body);
                return response.status(200).json(reserva);
            }
            catch (error) {
                console.error('Error updating reserva:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteReserva(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                yield this.reservaService.deleteReserva(id);
                return response.status(204).send();
            }
            catch (error) {
                console.error('Error deleting reserva:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    listReservas(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reservas = yield this.reservaService.listReservas();
                return response.status(200).json(reservas);
            }
            catch (error) {
                console.error('Error listing reservas:', error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.ReservaController = ReservaController;
