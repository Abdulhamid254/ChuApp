/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './models/user';
import { CreateUserDetails, FindUserParams } from 'src/utils/types';
import { User } from 'src/utils/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/helpers';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // creating the user function

  async createUser(userDetails: CreateUserDetails) {
    const existinUser = await this.userRepository.findOneBy({
      email: userDetails.email,
    });
    if (existinUser)
      throw new HttpException('User already Exist', HttpStatus.CONFLICT);
    const password = await hashPassword(userDetails.password);
    const newUser = this.userRepository.create({ ...userDetails, password });
    return this.userRepository.save(newUser);
  }

  // retrieving the user function based on the email
  async findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOneBy(findUserParams);
  }
}
