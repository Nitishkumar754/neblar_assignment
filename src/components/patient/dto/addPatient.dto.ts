import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export default class AddPatientDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
}