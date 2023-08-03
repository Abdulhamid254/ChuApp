/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IAuthService } from '../models/auth';
import { Services } from 'src/utils/constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthService,
  ) {
    // by default pssport local uses username and password thats why we use email below
    super({ usernameField: 'email' });
  }

  // when this method returns true authentication scuccess when it returns false authentication failed/throws an error
  async validate(email: string, password: string) {
    // console.log(email, password);
    return this.authService.validateUser({ email, password });
  }
}
