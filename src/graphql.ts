
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export interface CreateDepartmentInput {
    name: string;
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
    students(): Student[] | Promise<Student[]>;
    student(id: string): Student | Promise<Student>;
    departments(): Department[] | Promise<Department[]>;
    department(id: string): Department | Promise<Department>;
}

export interface IMutation {
    createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
    updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;
    removeStudent(id: number): Student | Promise<Student>;
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
}

export type DateTime = any;
type Nullable<T> = T | null;
