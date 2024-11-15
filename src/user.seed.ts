import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async seed() {
    for (let i = 0; i < 1000000; i++) {
      const User = this.userRepository.create({
      name: `Пользователь ${i}`,
      surname: `Фамилия ${i}`,
      age: Math.floor(Math.random() * 100),
      gender: i % 2 === 0 ? 'Мужчина' : 'Женщина',
      problem: Math.random() < 0.5,
    })
    
    await this.userRepository.save(User)
  }
}
}