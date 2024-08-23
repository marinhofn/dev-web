import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import { SessionRepository } from '../repositories/sessionRepository';

export class AuthService {
    private prismaClient: PrismaClient;
    private sessionRepository: SessionRepository;

    constructor() {
        this.prismaClient = new PrismaClient();
        this.sessionRepository = new SessionRepository();
    }

    async login(document: string, password: string) {
        const user = await this.prismaClient.user.findUnique({
            where: { document },
        });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = uuidv4();
            await this.sessionRepository.createSession({
                token,
                userId: user.id,
                expiresAt: new Date(Date.now() + 3600 * 1000), // Token válido por 1 hora
            });

            return { success: true, token };
        } else {
            return { success: false };
        }
    }

    async validateToken(token: string) {
        if (!token) {
            return false;
        }

        const session = await this.sessionRepository.findSessionByToken(token);
        return session && session.expiresAt > new Date();
    }

    async logout(token: string) {
        return await this.sessionRepository.deleteSession(token);
    }

    async listSessions() {
        return await this.sessionRepository.listSessions();
    }
}