import express from 'express';
// import { getAllProducts } from './controllers/productsController';
import ProductsController from './controllers/productsController';
import UserController from './controllers/userController';
import OrderController from './controllers/orderController';
import LoginValidation from './middlewares/loginValidation';

const productController = new ProductsController();
const userController = new UserController();
const orderController = new OrderController();
const loginValidation = new LoginValidation();
const app = express();

app.use(express.json());
app.get('/products', productController.getAllProduct);
app.post('/products', productController.create);
app.get('/orders', orderController.getAllOrder);
app.post('/users', userController.create);
app.post('/login', loginValidation.loginV, userController.login);

export default app;
