import { Controller, Post } from "@nestjs/common"
import { userService } from "./user.service"
import { SeederService } from './user.seed'

@Controller('users')
export class UserController {
    constructor(private readonly userService: userService, 
                private readonly seederService: SeederService) {}

    @Post('update-problem-flag')
    async updateProblemFlag() {
        const result = await this.userService.updateProblemFlag()
        return { message: `Количество пользователей с проблемами: ${result.updated}`}
    }

    @Post('add-users')
    async addUsers() {
        await this.seederService.seed()
        return { message: 'Пользователи созданы'}
    }
}