import express from "express";
import {
  deletebyid,
  getProductadmin,
  getProducts,
  getProductsid,
  postproduct,
} from "../Controllers/productController.js";
const productRouter = express.Router();

productRouter.post("/addproduct", postproduct);
productRouter.get("/", getProducts);
productRouter.get("/coffee/:id", getProductsid);
// productRouter.get('/prodAdmin',getProductsbyadminid);
productRouter.get("/prodadmin", getProductadmin);
productRouter.delete("/coffeeDeleted/:id", deletebyid);
export default productRouter;
