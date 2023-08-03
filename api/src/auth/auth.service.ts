import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './models/auth';
import { IUserService } from 'src/users/models/user';
import { Services } from 'src/utils/constants';
import { ValidateUserDetails } from 'src/utils/types';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(Services.USERS) private userService: IUserService) {}

  async validateUser(userDetails: ValidateUserDetails) {
    const user = await this.userService.findUser({ email: userDetails.email });
    if (!user) {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
    // if the user does exist
    return compareHash(userDetails.password, user.password);
  }
}
