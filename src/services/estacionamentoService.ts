import { EstacionamentoRepository } from '../repositories/estacionamentoRepository';

export class EstacionamentoService {
    private estacionamentoRepository: EstacionamentoRepository;

    constructor() {
        this.estacionamentoRepository = new EstacionamentoRepository();
    }

    async createEstacionamento(data: { nome: string; endereco: string; capacidade: number }) {
        const estacionamento = await this.estacionamentoRepository.createEstacionamento(data);
        return estacionamento;
    }

    async getEstacionamentoById(id: string) {
        return await this.estacionamentoRepository.findById(id);
    }

    async updateEstacionamento(id: string, data: Partial<{ nome: string; endereco: string; capacidade: number }>) {
        return await this.estacionamentoRepository.updateEstacionamento(id, data);
    }

    async deleteEstacionamento(id: string) {
        return await this.estacionamentoRepository.deleteEstacionamento(id);
    }

    async listEstacionamentos() {
        return await this.estacionamentoRepository.listEstacionamentos();
    }
}
