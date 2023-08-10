import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { Routes, Services } from 'src/utils/constants';
import { IConverstionsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConverstionsService,
  ) {}
  // posting a conversation
  @Post()
  createConversation(@Body() createConversationPayload: CreateConversationDto) {
    console.log(createConversationPayload);
    this.conversationsService.createConversation(createConversationPayload);
  }
}
