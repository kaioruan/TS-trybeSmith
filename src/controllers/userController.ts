import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(201).json({ token: userCreated });
  };

  public login = async (req: Request, res: Response) => {
    const logged = await this.userService.login(req.body);
    res.status(200).json({ token: logged });
  };
}

export default UserController;