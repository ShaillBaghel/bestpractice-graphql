import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type } from 'os';
import { Department } from 'src/department/entity/department.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'student' })
@ObjectType()
export class Student {
  /**
   * department contains column id holds type string.
   */
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  /**
   * department contains column name holds type string.
   */
  @Field()
  @Column({ type: 'varchar' })
  name: string;

  @Field()
  @Column({ type: 'varchar' })
  email: string;

  @Field()
  @Column({ type: 'varchar' })
  password: string;

  // @ResolvedField()
  @Column({ type: 'varchar',  nullable: true })
  departmentId: string

  @Field(type=> Department)
  @ManyToOne(()=> Department, (department: Department)=> department.students)
  department: Department

  /**
   * department contains column created_at holds type date.
   */
  @Field(type=> Date)
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
function ResolvedField() {
  throw new Error('Function not implemented.');
}

