/* eslint-disable prettier/prettier */
import { User } from 'src/utils/typeorm';
import { CreateConversationParams } from 'src/utils/types';

export interface IConverstionsService {
  createConversation(user: User, conversationParams: CreateConversationParams);
}
