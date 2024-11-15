import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { userService } from './user.service'
import { User } from './user.entity'
import { UserController } from './user.controller'
import { SeederService } from './user.seed'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [userService, SeederService]
})

export class userModule {}