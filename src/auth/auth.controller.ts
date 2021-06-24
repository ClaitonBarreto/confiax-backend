import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async insert(@Body('login') login, @Res() res: Response) {
    const auth = await this.authService.auth(login);

    if (!auth)
      res
        .status(HttpStatus.UNAUTHORIZED)
        .send({ message: 'invalid credentials' });

    res.status(HttpStatus.OK).send(auth);
  }
}
