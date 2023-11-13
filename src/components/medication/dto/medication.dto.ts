import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class AddMedDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly dosage: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  patientNhi: string;
}
