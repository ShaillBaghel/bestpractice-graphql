
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
    password: string;
    departmentId: string;
}

export interface UpdateStudentInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    departmentId?: Nullable<string>;
    id: number;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface Student {
    id: string;
    name: string;
    email: string;
    password: string;
    department: Department;
    created_at: DateTime;
}

export interface Department {
    id: string;
    name: string;
    students: Student[];
    created_at: DateTime;
}

export interface LoginResponse {
    access_token: string;
    student: Student;
}

export interface IQuery {
    departments(): Department[] | Promise<Department[]>;
    department(id: string): Department | Promise<Department>;
    students(): Student[] | Promise<Student[]>;
    student(id: string): Student | Promise<Student>;
}

export interface IMutation {
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
    updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;
    removeStudent(id: number): Student | Promise<Student>;
    login(loginInput: LoginInput): LoginResponse | Promise<LoginResponse>;
}

export type DateTime = any;
type Nullable<T> = T | null;
