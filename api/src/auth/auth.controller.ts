import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './models/auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUserService } from 'src/users/models/user';
import { instanceToPlain } from 'class-transformer';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/Guards';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}

  // register
  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    // console.log(createUserDto);
    // ensuring that we dont return the password to the user
    return instanceToPlain(await this.userService.createUser(createUserDto));
  }

  // login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Res() res: Response) {
    return res.send(HttpStatus.OK);
  }

  //status
  // we are gonna use this authenticated guards everywhere to protect the endpoints
  @Get('status')
  @UseGuards(AuthenticatedGuard)
  async status(@Req() req: Request, @Res() res: Response) {
    res.send(req.user);
  }

  //logout
  @Post('logout')
  logout() {}
}
