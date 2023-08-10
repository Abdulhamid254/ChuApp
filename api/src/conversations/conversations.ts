/* eslint-disable prettier/prettier */
import { CreateConversationParams } from 'src/utils/types';

export interface IConverstionsService {
  createConversation(conversationParams: CreateConversationParams);
}
