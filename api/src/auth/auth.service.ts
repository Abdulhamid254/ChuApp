import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './models/auth';
import { IUserService } from 'src/users/models/user';
import { Services } from 'src/utils/constants';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(Services.USERS) private userService: IUserService) {}
  validateuser() {
    throw new Error('Method not implemented.');
  }
}
