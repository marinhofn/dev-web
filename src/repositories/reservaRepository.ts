import { PrismaClient, Reserva } from '@prisma/client';

export class ReservaRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async findById(id: string): Promise<Reserva | null> {
        return await this.prismaClient.reserva.findUnique({
            where: { id }, 
        });
    }

    async createReserva(data: { dataHoraEntrada: Date; dataHoraSaida?: Date; userId: string; vagaId: number; estacionamentoId: number }): Promise<Reserva> {
        return await this.prismaClient.reserva.create({
            data,
        });
    }

    async updateReserva(id: string, data: Partial<Reserva>): Promise<Reserva> {
        return await this.prismaClient.reserva.update({
            where: { id }, 
            data,
        });
    }

    async deleteReserva(id: string): Promise<Reserva> {
        return await this.prismaClient.reserva.delete({
            where: { id }, 
        });
    }

    async listReservas(): Promise<Reserva[]> {
        return await this.prismaClient.reserva.findMany();
    }
}
