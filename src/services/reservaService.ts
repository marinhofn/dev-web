import { ReservaRepository } from '../repositories/reservaRepository';

export class ReservaService {
    private reservaRepository: ReservaRepository;

    constructor() {
        this.reservaRepository = new ReservaRepository();
    }

    async createReserva(data: { dataHoraEntrada: Date; dataHoraSaida?: Date; userId: number; vagaId: number; estacionamentoId: number }) {
        const reserva = await this.reservaRepository.createReserva(data);
        return reserva;
    }

    async getReservaById(id: string) {
        return await this.reservaRepository.findById(id);
    }

    async updateReserva(id: string, data: Partial<{ dataHoraEntrada: Date; dataHoraSaida?: Date }>) {
        return await this.reservaRepository.updateReserva(id, data);
    }

    async deleteReserva(id: string) {
        return await this.reservaRepository.deleteReserva(id);
    }

    async listReservas() {
        return await this.reservaRepository.listReservas();
    }
}
