import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { User } from '../database/models/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async list(@Res() res: Response) {
    const users = await this.userService.findAll();
    res.send(users);
  }

  @Get(':id')
  async get(@Param() params, @Res() res: Response) {
    const user = await this.userService.findOne(params.id);
    if (!user)
      res.status(HttpStatus.NOT_FOUND).send({ message: 'User not found' });
    res.status(HttpStatus.OK).send(user);
  }

  @Post()
  insert(@Body('user') user: User): Promise<User | ErrorObject> {
    return this.userService.insert(user);
  }
}
