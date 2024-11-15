import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from './user.entity'

@Injectable()
export class userService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async updateProblemFlag(): Promise<{ updated: number }> {
        const userWithProblems = await this.userRepository.count({ where: { problem: true }})

        await this.userRepository.update({ problem: true }, { problem: false })

        return { updated: userWithProblems }
    }
    
}