import { Request, Response } from 'express';
import { ReservaService } from '../services/reservaService';

export class ReservaController {
    private reservaService: ReservaService;

    constructor() {
        this.reservaService = new ReservaService();
    }

    async create(request: Request, response: Response) {
        try {
            const reserva = await this.reservaService.createReserva(request.body);
            return response.status(201).json(reserva);
        } catch (error) {
            console.error('Error creating reserva:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getReserva(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const reserva = await this.reservaService.getReservaById(id);

            if (!reserva) {
                return response.status(404).json({ message: 'Reserva not found' });
            }

            return response.status(200).json(reserva);
        } catch (error) {
            console.error('Error fetching reserva:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateReserva(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const reserva = await this.reservaService.updateReserva(id, request.body);

            return response.status(200).json(reserva);
        } catch (error) {
            console.error('Error updating reserva:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteReserva(request: Request, response: Response) {
        try {
            const { id } = request.params;
            await this.reservaService.deleteReserva(id);

            return response.status(204).send();
        } catch (error) {
            console.error('Error deleting reserva:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async listReservas(request: Request, response: Response) {
        try {
            const reservas = await this.reservaService.listReservas();
            return response.status(200).json(reservas);
        } catch (error) {
            console.error('Error listing reservas:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
