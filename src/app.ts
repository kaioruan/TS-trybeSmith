import express from 'express';
// import { getAllProducts } from './controllers/productsController';
import ProductsController from './controllers/productsController';

const productController = new ProductsController();
const app = express();

app.use(express.json());
app.get('/products', productController.getAllProduct);
app.post('/products', productController.create);

export default app;
