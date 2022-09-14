import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class LoginValidation {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public loginV = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }

    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }
    const user = await this.model.login(username, password);
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    next();
  };
}

export default LoginValidation;