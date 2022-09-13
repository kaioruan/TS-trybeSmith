import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAllProduct = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.getAllProduct();
    res.status(200).json(allProducts);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductsController;