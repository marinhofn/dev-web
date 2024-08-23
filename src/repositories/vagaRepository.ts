import { PrismaClient, Vaga } from '@prisma/client';

export class VagaRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async findById(id: string): Promise<Vaga | null> {
        return await this.prismaClient.vaga.findUnique({
            where: { id }, 
        });
    }

    async createVaga(data: { numero: string; tipo: string; estacionamentoId: number }): Promise<Vaga> {
        return await this.prismaClient.vaga.create({
            data,
        });
    }

    async updateVaga(id: string, data: Partial<Vaga>): Promise<Vaga> {
        return await this.prismaClient.vaga.update({
            where: { id }, 
            data,
        });
    }

    async deleteVaga(id: string): Promise<Vaga> {
        return await this.prismaClient.vaga.delete({
            where: { id }, 
        });
    }

    async listVagas(): Promise<Vaga[]> {
        return await this.prismaClient.vaga.findMany();
    }
}
