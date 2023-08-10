import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IConverstionsService } from './conversations';
import { CreateConversationParams } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation, User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { IParticipantsService } from 'src/participants/participants';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/users/models/user';

@Injectable()
export class ConversationsService implements IConverstionsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @Inject(Services.PARTICIPANTS)
    private readonly participantsService: IParticipantsService,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
  ) {}

  async createConversation(user: User, params: CreateConversationParams) {
    // const author = await this.participantService.findParticipant();
    // we need to attach participants to user fisrstly we must find the user
    const userDB = await this.userService.findUser({ id: user.id });

    if (!userDB.participant) {
      const newParticipant = await this.participantsService.createParticipant({
        id: params.authorId,
      });
      userDB.participant = newParticipant;
      // the below function will save the participants and help in updating it
      await this.userService.saveUser(userDB);
    }
    // we scout the database for a user...since user has a relationship with the partcicpant which will hwp us get the receipentId
    const recipient = await this.userService.findUser({
      id: params.recipientId,
    });
    if (!recipient)
      throw new HttpException(
        'Cannot Create Conversation',
        HttpStatus.BAD_REQUEST,
      );
    // if the recipient does not exist we create one
    if (!recipient.participant) {
      const newParticipant = await this.participantsService.createParticipant({
        id: params.recipientId,
      });
      recipient.participant = newParticipant;
      await this.userService.saveUser(recipient);
    }
  }
}
