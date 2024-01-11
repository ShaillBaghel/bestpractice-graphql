import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { StudentModule } from 'src/student/student.module';

import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule.register({defaultStrategy: 'JWT'}),  JwtModule.register({
    // signOptions: { expiresIn: '60s'},
    secret: "hello-jwt"
  }), StudentModule,],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
  exports:[AuthModule, LocalStrategy, JwtStrategy, JwtModule]
})
export class AuthModule {}
