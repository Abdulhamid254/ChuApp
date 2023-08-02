import { Injectable } from '@nestjs/common';
import { IAuthService } from './models/auth';

@Injectable()
export class AuthService implements IAuthService {
  validateuser() {
    throw new Error('Method not implemented.');
  }
}
