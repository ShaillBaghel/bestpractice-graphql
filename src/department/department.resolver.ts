import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { CreateDepartmentInput } from './dto/create-department.input';
import { Department } from './entity/department.entity';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => [Department])
  async departments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Mutation(()=> Department)
  async createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput): Promise<Department> {
    return this.departmentService.createDepartment(createDepartmentInput)
  }

  @Query(() => Department)
  async department(@Args('id', { type:()=> String}) id: string ): Promise<Department> {
    return this.departmentService.findOne(id);
  }
}
