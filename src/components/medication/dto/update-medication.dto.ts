import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UpdateMedDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  readonly medId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  readonly dosage: string;
}
