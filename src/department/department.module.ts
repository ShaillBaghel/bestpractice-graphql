import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entity/department.entity';
import { Student } from 'src/student/entities/student.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Student]),
  // GraphQLModule.forRoot({
  //   driver: ApolloDriver,
  //   // include:[Department],
  //   // installSubscriptionHandlers: true,
  //   autoSchemaFile: join(process.cwd(), 'src/department/department.schema.gql'),
  //   sortSchema:true,
  //   // include:[Department],
  //   // definitions: {
  //   //   path: join(process.cwd(), 'src/department/department.graphql.ts'),
  //   // },
  //   playground: true,
  // }),

],
  providers: [DepartmentService, DepartmentResolver],
  exports: [DepartmentService]
})
export class DepartmentModule {}
