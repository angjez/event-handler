import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class AddEventInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  surname: string;

  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @IsDate()
  date: Date;
}
