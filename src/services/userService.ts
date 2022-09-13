// ./services/books.service.ts
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAllUser(): Promise<User[]> {
    const products = await this.model.getAllUser();
    return products;
  }

  public async create(user: User): Promise<User> {
    await this.model.create(user);
    const token = jwt.sign({ user }, JWT_SECRET);
    return token;
  }
}

export default UserService;