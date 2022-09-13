import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrder(): Promise<Order[]> {
    const result = await this.connection
      .execute(
        `SELECT o.id, o.userId,JSON_ARRAYAGG(p.id)
        as productsIds FROM Trybesmith.Orders as o
        INNER JOIN Trybesmith.Products as p
        ON o.id = p.orderId
        GROUP BY o.id
        ORDER BY o.userId`,
      );
    const [rows] = result;
    return rows as Order[];
  }
}