import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateDepartmentInput } from './dto/create-department.input';
import { Department } from './entity/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async createDepartment(
    createDepartmentInput: CreateDepartmentInput,
  ): Promise<Department> {
    const newDepartment = this.departmentRepository.create(
      createDepartmentInput,
    );
    return this.departmentRepository.save(newDepartment);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find()
  }

  async findOne(id: string): Promise<Department>{
    // const options: FindOneOptions<Department> = {
    //   where: { id: id },
    // };
    return await this.departmentRepository.findOneOrFail({where: {id}})
  }
}
