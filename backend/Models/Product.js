import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productUrl: {
    type: String,
    required: true,
  },
 price:{
    type: Number,
    required: true,
 },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;
