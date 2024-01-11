import { Injectable } from '@nestjs/common';
import { Student } from 'src/student/entities/student.entity';
import { StudentService } from 'src/student/student.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private studentService: StudentService,
    private jwtService: JwtService) {}

  async validateStudent(email: string, password: string): Promise<any> {
    const student = await this.studentService.findOne('email', email);
    if (student && student.password === password) {
      const { password, ...result } = student;
      return result;
    }
    return null;
  }

  async login(student: Student) {
   
    return {
      access_token: this.jwtService.sign({email: student.name, sub: student.id}),
      student
    };
  }
}
