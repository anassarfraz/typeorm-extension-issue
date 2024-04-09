import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
//entities

@ObjectType()
@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName: string;

  @Column({ unique: true })
  @Field()
  email: string;
  @Column()
  password: string;

  //dates

  @CreateDateColumn({ type: 'timestamptz' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field()
  updatedAt: string;
}
