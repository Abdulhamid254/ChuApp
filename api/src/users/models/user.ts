import { CreateUserDetails } from 'src/utils/types';

/* eslint-disable prettier/prettier */
export interface IUserService {
  createUser(userDetails: CreateUserDetails);
}
