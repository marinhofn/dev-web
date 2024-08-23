import { PrismaClient, Estacionamento } from '@prisma/client';

export class EstacionamentoRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async findById(id: string): Promise<Estacionamento | null> {
        return await this.prismaClient.estacionamento.findUnique({
            where: { id: parseInt(id) }, 
        });
    }

    async createEstacionamento(data: { nome: string; endereco: string; capacidade: number }): Promise<Estacionamento> {
        return await this.prismaClient.estacionamento.create({
            data,
        });
    }

    async updateEstacionamento(id: string, data: Partial<Estacionamento>): Promise<Estacionamento> {
        return await this.prismaClient.estacionamento.update({
            where: { id: parseInt(id) }, 
            data,
        });
    }

    async deleteEstacionamento(id: string): Promise<Estacionamento> {
        return await this.prismaClient.estacionamento.delete({
            where: { id: parseInt(id) }, 
        });
    }

    async listEstacionamentos(): Promise<Estacionamento[]> {
        return await this.prismaClient.estacionamento.findMany();
    }
}
