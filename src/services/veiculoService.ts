import { VeiculoRepository } from '../repositories/veiculoRepository';

export class VeiculoService {
    private veiculoRepository: VeiculoRepository;

    constructor() {
        this.veiculoRepository = new VeiculoRepository();
    }

    async createVeiculo(data: { placa: string; modelo: string; cor: string; userId: number }) {
        const veiculo = await this.veiculoRepository.createVeiculo(data);
        return veiculo;
    }

    async getVeiculoById(id: string) {
        return await this.veiculoRepository.findById(id);
    }

    async updateVeiculo(id: string, data: Partial<{ placa: string; modelo: string; cor: string }>) {
        return await this.veiculoRepository.updateVeiculo(id, data);
    }

    async deleteVeiculo(id: string) {
        return await this.veiculoRepository.deleteVeiculo(id);
    }

    async listVeiculos() {
        return await this.veiculoRepository.listVeiculos();
    }
}
