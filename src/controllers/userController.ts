import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAllUser = async (_req: Request, res: Response) => {
    const allUsers = await this.userService.getAllUser();
    res.status(200).json(allUsers);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(201).json({ token: userCreated });
  };
}

export default UserController;