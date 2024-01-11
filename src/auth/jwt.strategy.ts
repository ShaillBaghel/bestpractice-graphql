import { Injectable} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy} from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "hello-jwt",
      logging: true
    }); 
  }



  async validate(payload: any, done: (error: any, user: any) => void): Promise<any> {
    try{
      console.log("hearder----", payload)
      return {studentEmail: payload.email, studentId: payload.sub};
    } catch (error) {
      console.log('req---------', payload);
      // Handle other errors, such as token expiration or decoding issues
      return done(error, false);
    }
   
  }
}

