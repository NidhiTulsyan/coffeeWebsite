import express from 'express';
import { getProducts, getProductsid, postproduct } from '../Controllers/productController.js';
const productRouter = express.Router();

productRouter.post('/addproduct',postproduct);
productRouter.get('/',getProducts);
productRouter.get('/:id',getProductsid);

export default productRouter;