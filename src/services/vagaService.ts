import { VagaRepository } from '../repositories/vagaRepository';

export class VagaService {
    private vagaRepository: VagaRepository;

    constructor() {
        this.vagaRepository = new VagaRepository();
    }

    async createVaga(data: { numero: string; tipo: string; estacionamentoId: string }) {
        const vaga = await this.vagaRepository.createVaga(data);
        return vaga;
    }

    async getVagaById(id: string) {
        return await this.vagaRepository.findById(id);
    }

    async updateVaga(id: string, data: Partial<{ numero: string; tipo: string; disponibilidade: boolean }>) {
        return await this.vagaRepository.updateVaga(id, data);
    }

    async deleteVaga(id: string) {
        return await this.vagaRepository.deleteVaga(id);
    }

    async listVagas() {
        return await this.vagaRepository.listVagas();
    }
}
