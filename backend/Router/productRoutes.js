import express from 'express';
import { postproduct } from '../Controllers/productController.js';
const productRouter = express.Router();

productRouter.post('/addproduct',postproduct)

export default productRouter;