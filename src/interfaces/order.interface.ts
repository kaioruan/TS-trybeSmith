// ./interfaces/book.interface.ts
interface Order {
  id: number;
  userId: number;
  productsIds?: number[];
}

export default Order;