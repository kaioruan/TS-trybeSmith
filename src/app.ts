import express from 'express';
// import { getAllProducts } from './controllers/productsController';
import ProductsController from './controllers/productsController';
import UserController from './controllers/userController';
import OrderController from './controllers/orderController';

const productController = new ProductsController();
const userController = new UserController();
const orderController = new OrderController();
const app = express();

app.use(express.json());
app.get('/products', productController.getAllProduct);
app.post('/products', productController.create);
app.get('/orders', orderController.getAllOrder);
app.post('/users', userController.create);

export default app;
