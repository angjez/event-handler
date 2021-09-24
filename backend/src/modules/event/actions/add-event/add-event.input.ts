import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class AddEventInput {
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  surname: string;

  @Field({ nullable: false })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsDate()
  date: Date;
}
