import express from 'express';
import { getProducts, postproduct } from '../Controllers/productController.js';
const productRouter = express.Router();

productRouter.post('/addproduct',postproduct);
productRouter.get('/',getProducts);

export default productRouter;