/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/utils/typeorm';
import { Services } from 'src/utils/constants';
import { PassportSerializer } from '@nestjs/passport';
import { IUserService } from 'src/users/models/user';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USERS)
    private readonly userService: IUserService,
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    done(null, user);
  }

  // in deserializer we are going to search the database for the user the return the user by callingthe done function
  async deserializeUser(user: User, done: Function) {
    const userDb = await this.userService.findUser({ id: user.id });
    return userDb ? done(null, userDb) : done(null, null);
  }
}
