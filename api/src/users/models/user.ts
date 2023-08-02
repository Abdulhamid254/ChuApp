/* eslint-disable prettier/prettier */
import { CreateUserDetails } from 'src/utils/types';

export interface IUserService {
  createUser(userDetails: CreateUserDetails);
}
