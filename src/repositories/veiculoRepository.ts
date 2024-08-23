import { PrismaClient, Veiculo } from '@prisma/client';

export class VeiculoRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async findById(id: string): Promise<Veiculo | null> {
        return await this.prismaClient.veiculo.findUnique({
            where: { id }, 
        });
    }

    async createVeiculo(data: { placa: string; modelo: string; cor: string; userId: number }): Promise<Veiculo> {
        return await this.prismaClient.veiculo.create({
            data,
        });
    }

    async updateVeiculo(id: string, data: Partial<Veiculo>): Promise<Veiculo> {
        return await this.prismaClient.veiculo.update({
            where: { id }, 
            data,
        });
    }

    async deleteVeiculo(id: string): Promise<Veiculo> {
        return await this.prismaClient.veiculo.delete({
            where: { id }, 
        });
    }

    async listVeiculos(): Promise<Veiculo[]> {
        return await this.prismaClient.veiculo.findMany();
    }
}
