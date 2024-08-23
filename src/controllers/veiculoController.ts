import { Request, Response } from 'express';
import { VeiculoService } from '../services/veiculoService';

export class VeiculoController {
    private veiculoService: VeiculoService;

    constructor() {
        this.veiculoService = new VeiculoService();
    }

    async create(request: Request, response: Response) {
        try {
            const veiculo = await this.veiculoService.createVeiculo(request.body);
            return response.status(201).json(veiculo);
        } catch (error) {
            console.error('Error creating veiculo:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getVeiculo(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const veiculo = await this.veiculoService.getVeiculoById(id);

            if (!veiculo) {
                return response.status(404).json({ message: 'Veiculo not found' });
            }

            return response.status(200).json(veiculo);
        } catch (error) {
            console.error('Error fetching veiculo:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateVeiculo(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const veiculo = await this.veiculoService.updateVeiculo(id, request.body);

            return response.status(200).json(veiculo);
        } catch (error) {
            console.error('Error updating veiculo:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteVeiculo(request: Request, response: Response) {
        try {
            const { id } = request.params;
            await this.veiculoService.deleteVeiculo(id);

            return response.status(204).send();
        } catch (error) {
            console.error('Error deleting veiculo:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async listVeiculos(request: Request, response: Response) {
        try {
            const veiculos = await this.veiculoService.listVeiculos();
            return response.status(200).json(veiculos);
        } catch (error) {
            console.error('Error listing veiculos:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
