import { UserRepository } from '../repositories/userRepository'; 
import bcrypt from 'bcrypt';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data: { nome: string; document: string; password: string, telefone: string, email: string }) {        
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await this.userRepository.createUser({
            ...data,
            password: hashedPassword,
        });

        return user;
    }

    async getUserById(id: string) {
        return await this.userRepository.findById(id);
    }

    async updateUser(id: string, data: Partial<{ nome: string; document: string; password: string }>) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        return await this.userRepository.updateUser(id, data);
    }

    async deleteUser(id: string) {
        return await this.userRepository.deleteUser(id);
    }

    async listUsers() {
        return await this.userRepository.listUsers();
    }
}