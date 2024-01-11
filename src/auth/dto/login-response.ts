import { Field, ObjectType } from "@nestjs/graphql"
import { Student } from "../../student/entities/student.entity"

@ObjectType()
export class LoginResponse{

    @Field()
    access_token: string

    @Field(()=> Student)
    student: Student
}