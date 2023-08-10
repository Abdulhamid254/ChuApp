/* eslint-disable prettier/prettier */
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Conversation } from './Conversation';

@Entity({ name: 'participants' })
export class Participant {
  // bidirectional relationships
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Conversation, (Conversation) => Conversation.participants)
  @JoinTable()
  conversations: Conversation[];
}
