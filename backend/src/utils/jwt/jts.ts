import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { UserType } from '../../@types/user';

class Jwt {
  private _secret: string;

  constructor(secret: string) {
    this._secret = secret;

    this.sign = this.sign.bind(this);
    this.verify = this.verify.bind(this);
  }

  sign(data: UserType) {
    return jwt.sign({ data }, this._secret, { expiresIn: '7d', algorithm: 'HS256' });
  }

  verify(token: string) {
    return jwt.verify(token, this._secret);
  }
}

const { JWT_SECRET } = process.env;

export default new Jwt(JWT_SECRET as string);
