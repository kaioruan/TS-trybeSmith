import express from 'express';
import ProductsController from './controllers/productsController';
import UserController from './controllers/userController';
import OrderController from './controllers/orderController';
import LoginValidation from './middlewares/loginValidation';
import ProductValidation from './middlewares/productValidation';

const productController = new ProductsController();
const userController = new UserController();
const orderController = new OrderController();
const loginValidation = new LoginValidation();
const productValidation = new ProductValidation();
const app = express();

app.use(express.json());
app.get('/products', productController.getAllProduct);
app.post(
  '/products',
  productValidation.length,

  productValidation.product,

  productController.create,
);
app.get('/orders', orderController.getAllOrder);
app.post('/users', userController.create);
app.post('/login', loginValidation.loginV, userController.login);

export default app;
