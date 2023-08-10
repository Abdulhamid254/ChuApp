/* eslint-disable prettier/prettier */
import { Participant } from 'src/utils/typeorm';
import {
  CreateParticipantParams,
  findParticipantParams,
} from 'src/utils/types';

export interface IParticipantsService {
  findParticipant(params: findParticipantParams): Promise<Participant | null>;
  createParticipant(params: CreateParticipantParams): Promise<Participant>;
}
