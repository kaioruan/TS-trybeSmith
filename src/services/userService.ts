// ./services/books.service.ts
import Jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import Login from '../interfaces/login.interface';
import Token from '../interfaces/token.interface';

const JWT_SECRET = 'secret';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<Token> {
    await this.model.create(user);
    const token = Jwt.sign({ user }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '5d' });
    return { token };
  }

  public async login(user: Login): Promise<Token> {
    await this.model.login(user.username, user.password);
    const token = Jwt.sign({ user }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '5d' });
    return { token };
  }
}

export default UserService;