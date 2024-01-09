import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { CreateDepartmentInput } from './dto/create-department.input';
import { Department } from './entity/department.entity';

@Resolver((of) => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query((returns) => [Department])
  async departments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Mutation(()=> Department)
  async createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput): Promise<Department> {
    return this.departmentService.createDepartment(createDepartmentInput)
  }

  @Query((returns) => Department)
  async department(@Args('id', { type:()=> String}) id: string ): Promise<Department> {
    return this.departmentService.findOne(id);
  }
}
