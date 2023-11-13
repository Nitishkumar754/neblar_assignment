import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { ObjectType, Field, InputType } from '@nestjs/graphql';
import MedicationEntity from '../medication/medication.entity';

@Entity('patient')
@ObjectType()
@InputType('PatientInput')
export default class PatientEntity {
  @PrimaryGeneratedColumn()
  @Index()
  @Field({ nullable: true })
  readonly nhi: number;

  @Field()
  @Column({ nullable: true })
  readonly name: string;

  @Field()
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Field(() => [MedicationEntity], { nullable: true })
  @OneToMany(() => MedicationEntity, (medication) => medication.patient)
  medications: Promise<MedicationEntity[]>;
}
