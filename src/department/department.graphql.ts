
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateDepartmentInput {
    name: string;
}

export interface CreateStudentInput {
    name: string;
    email: string;
    departmentId: string;
}

export interface UpdateStudentInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    departmentId?: Nullable<string>;
    id: number;
}

export interface Student {
    id: string;
    name: string;
    email: string;
    department: Department;
    created_at: DateTime;
}

export interface Department {
    id: string;
    name: string;
    students: Student[];
    created_at: DateTime;
}

export interface IQuery {
    departments(): Department[] | Promise<Department[]>;
    department(id: string): Department | Promise<Department>;
    findAll(): Student[] | Promise<Student[]>;
    findOne(id: string): Student | Promise<Student>;
}

export interface IMutation {
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
    updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;
    removeStudent(id: number): Student | Promise<Student>;
}

export type DateTime = any;
type Nullable<T> = T | null;
