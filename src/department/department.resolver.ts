import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DepartmentService } from './department.service';
import { CreateDepartmentInput } from './dto/create-department.input';
import { Department } from './entity/department.entity';

@Resolver((of) => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query((returns) => [Department])
  @UseGuards(JwtAuthGuard)
  async departments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Mutation(()=> Department)
  @UseGuards(JwtAuthGuard)
  async createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput): Promise<Department> {
    return this.departmentService.createDepartment(createDepartmentInput)
  }

  @Query((returns) => Department)
  @UseGuards(JwtAuthGuard)
  async department(@Args('id', { type:()=> String}) id: string ): Promise<Department> {
    return this.departmentService.findOne(id);
  }
}
