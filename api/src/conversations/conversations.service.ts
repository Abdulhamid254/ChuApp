import { Injectable } from '@nestjs/common';
import { IConverstionsService } from './conversations';
import { CreateConversationParams } from 'src/utils/types';

@Injectable()
export class ConversationsService implements IConverstionsService {
  createConversation(params: CreateConversationParams) {}
}
