import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './models/auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUserService } from 'src/users/models/user';
import { instanceToPlain } from 'class-transformer';

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
  @Post('login')
  login() {}

  //status
  @Get('status')
  status() {}

  //logout
  @Post('logout')
  logout() {}
}
