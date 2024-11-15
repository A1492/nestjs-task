import { Module} from '@nestjs/common'
import { userModule } from './user.module'
import { User } from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: "1234",
            database: 'postgres',
            entities: [User],
            synchronize: false
        }),
        userModule
    ],
})
export class AppModule {}