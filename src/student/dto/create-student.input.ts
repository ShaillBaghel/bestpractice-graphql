import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  departmentId: string
}
