import { Request, Response } from 'express';
import { VagaService } from '../services/vagaService';

export class VagaController {

    private vagaService: VagaService;

    constructor() {
        this.vagaService = new VagaService();
    }

    async create(request: Request, response: Response) {
        console.log('Creating vaga');
        try {
            const vaga = await this.vagaService.createVaga(request.body);
            return response.status(201).json(vaga);
        } catch (error) {
            console.error('Error creating vaga:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getVaga(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const vaga = await this.vagaService.getVagaById(id);

            if (!vaga) {
                return response.status(404).json({ message: 'Vaga not found' });
            }

            return response.status(200).json(vaga);
        } catch (error) {
            console.error('Error fetching vaga:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateVaga(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const vaga = await this.vagaService.updateVaga(id, request.body);

            return response.status(200).json(vaga);
        } catch (error) {
            console.error('Error updating vaga:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteVaga(request: Request, response: Response) {
        try {
            const { id } = request.params;
            await this.vagaService.deleteVaga(id);

            return response.status(204).send();
        } catch (error) {
            console.error('Error deleting vaga:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async listVagas(request: Request, response: Response) {        
        try {
            const vagas = await this.vagaService.listVagas();
            return response.status(200).json(vagas);
        } catch (error) {
            console.error('Error listing vagas:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
