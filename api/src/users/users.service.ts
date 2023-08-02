import { Injectable } from '@nestjs/common';
import { IUserService } from './models/user';
import { CreateUserDetails } from 'src/utils/types';

@Injectable()
export class UsersService implements IUserService {
  createUser(userDetails: CreateUserDetails) {
    console.log('UserService.createUser');
  }
}
