/* eslint-disable prettier/prettier */
import { ISession } from 'connect-typeorm';
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'sessions' })
export class Session implements ISession {
  @Index()
  @Column('bigint')
  public expiredAt: number = Date.now();

  @PrimaryColumn('varchar', { length: 255 })
  public id: '';

  @Column('text')
  public json: '';

  @DeleteDateColumn()
  public destroyedAt?: Date;
}
