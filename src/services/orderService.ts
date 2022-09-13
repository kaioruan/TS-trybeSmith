import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrder(): Promise<Order[]> {
    const products = await this.model.getAllOrder();
    return products;
  }
}

export default OrderService;