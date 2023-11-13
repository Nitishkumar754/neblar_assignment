import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  AfterInsert,
  AfterUpdate,
  BeforeUpdate,
} from 'typeorm';
import PatientEntity from '../patient/patient.entity';

import { ObjectType, Field, InputType } from '@nestjs/graphql';

@Entity('medication')
@ObjectType()
@InputType('MedicationInput')
export default class MedicationEntity {
  @PrimaryGeneratedColumn()
  @Index()
  @Field({ nullable: true })
  readonly id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  dosage: string;

  @Field({ nullable: true })
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Field(() => PatientEntity, { nullable: true })
  @ManyToOne(() => PatientEntity, (patient) => patient.nhi)
  patient: PatientEntity;
}
