import { Request, Response } from 'express';
import { EstacionamentoService } from '../services/estacionamentoService';

export class EstacionamentoController {
    private estacionamentoService: EstacionamentoService;

    constructor() {
        this.estacionamentoService = new EstacionamentoService();
    }

    async create(request: Request, response: Response) {
        try {
            const estacionamento = await this.estacionamentoService.createEstacionamento(request.body);
            return response.status(201).json(estacionamento);
        } catch (error) {
            console.error('Error creating estacionamento:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getEstacionamento(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const estacionamento = await this.estacionamentoService.getEstacionamentoById(id);

            if (!estacionamento) {
                return response.status(404).json({ message: 'Estacionamento not found' });
            }

            return response.status(200).json(estacionamento);
        } catch (error) {
            console.error('Error fetching estacionamento:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateEstacionamento(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const estacionamento = await this.estacionamentoService.updateEstacionamento(id, request.body);

            return response.status(200).json(estacionamento);
        } catch (error) {
            console.error('Error updating estacionamento:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteEstacionamento(request: Request, response: Response) {
        try {
            const { id } = request.params;
            await this.estacionamentoService.deleteEstacionamento(id);

            return response.status(204).send();
        } catch (error) {
            console.error('Error deleting estacionamento:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async listEstacionamentos(request: Request, response: Response) {
        try {
            const estacionamentos = await this.estacionamentoService.listEstacionamentos();
            return response.status(200).json(estacionamentos);
        } catch (error) {
            console.error('Error listing estacionamentos:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
