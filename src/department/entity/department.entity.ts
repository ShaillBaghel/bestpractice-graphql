
import { Field, ObjectType } from '@nestjs/graphql';
import { Student } from 'src/student/entities/student.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
/**
 * This entity class maps to a database table department.
 */
@ObjectType()
@Entity({ name: 'department' })
export class Department extends BaseEntity {
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

  @Field(type=> [Student])
  @OneToMany(()=> Student, (student: Student)=> student.department)
  students: Student[]

  /**
   * department contains column created_at holds type date.
   */
  @Field(type=> Date)
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}