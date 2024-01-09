import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreateDepartmentInput{
    @IsAlpha()
    @Field()
    name: string
}