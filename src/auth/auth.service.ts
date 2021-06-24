import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/models/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async auth(login): Promise<User | string> {
    try {
      const user = await this.usersRepository.findOneOrFail({
        where: { email: login.email },
      });

      return user;
    } catch (e) {
      return e.sqlMessage;
    }
  }
}
