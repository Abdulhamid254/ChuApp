import { Injectable } from '@nestjs/common';
import { IParticipantsService } from './participants';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import {
  CreateParticipantParams,
  findParticipantParams,
} from 'src/utils/types';

@Injectable()
export class ParticipantsService implements IParticipantsService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
  ) {}

  findParticipant(params: findParticipantParams): Promise<Participant | null> {
    return this.participantRepository.findOneBy(params);
  }
  createParticipant(params: CreateParticipantParams): Promise<Participant> {
    const participant = this.participantRepository.create(params);
    return this.participantRepository.save(participant);
  }
}
