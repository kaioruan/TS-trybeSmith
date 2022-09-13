import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrder = async (_req: Request, res: Response) => {
    const allOrder = await this.orderService.getAllOrder();
    res.status(200).json(allOrder);
  };
}

export default OrderController;