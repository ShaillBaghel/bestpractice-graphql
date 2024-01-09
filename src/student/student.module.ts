import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { DepartmentModule } from 'src/department/department.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

@Module({
  imports: [
    DepartmentModule,
    TypeOrmModule.forFeature([Student]),
    // GraphQLModule.forRoot({
    //   driver: ApolloDriver,

    //   // include: [Student],
    //   // installSubscriptionHandlers: true,
    //   autoSchemaFile: join(process.cwd(), 'src/student/student.schema.gql'),
    //   sortSchema:true,
    //   // include: [Student],
    //   // definitions: {
    //   //   path: join(process.cwd(), 'src/student/student.graphql.ts'),
    //   // },
    //   playground: true,
    // }),
  ],
  providers: [StudentResolver, StudentService],
  exports:[StudentService]
})
export class StudentModule {}
