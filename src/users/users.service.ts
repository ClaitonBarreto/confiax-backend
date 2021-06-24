import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/models/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    if (user) return user;

    return null;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async insert(user: User): Promise<User | ErrorObject> {
    try {
      const createdUser = await this.usersRepository.insert(user);
      const insertedUser = await this.findOne(createdUser.raw.insertId);
      return insertedUser;
    } catch (e) {
      return {
        message: e.sqlMessage,
        error: true,
      };
    }
  }
}
