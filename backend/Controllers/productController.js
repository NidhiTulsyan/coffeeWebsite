import jwt from "jsonwebtoken";
import Product from "../Models/Product.js";

export const postproduct = async (req, res, next) => {
  let adminId;
  const extractedToken = req.headers.token;

  if (!extractedToken && extractedToken.trim() == "") {
    res.status(400).json({ message: "token is not valid" });
  }
  jwt.verify(extractedToken, process.env.SECRET, (err, decode) => {
    if (err) {
      res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decode.id;
      console.log(adminId);
      return adminId;
    }
  });
  const { title, description, productUrl, price } = req.body;
  if (!title && !description && !productUrl && !price) {
    res.status(422).json({ message: "invalid inputs" });
  }
  let product;
  try {
    product = new Product({
      title,
      description,
      price,
      productUrl,
      admin: adminId,
    });
    await product.save();
    //   const session = await mongoose.startSession();
    //   let adminUser = await admin.findById(adminId);
    //   session.startTransaction();
    //   await movies.save({session});
    //   console.log(movies.id);
    // //  const movieid =movies.id;
    //   adminUser.addMovies.push(movies);
    //   await adminUser.save({session});
    //   console.log(adminUser);
    //   await session.commitTransaction();
  } catch (error) {
    return next(error);
  }

  if (!product) {
    res.status(500).json({ message: "request failed" });
  } else {
    res.status(200).json({ success: "added", product });
  }
};

export const getProducts = async (req, res, next) => {
  let product;
  try {
    product = await Product.find();
  } catch (error) {
    return next(error);
  }

  if (!product) {
    res.status(500).json({ message: "no coffee product found" });
  } else {
    res.status(200).json({ product });
  }
};
export const getProductsid = async (req, res, next) => {
  let product;
  let id = req.params.id;

  try {
    product = await Product.findById(id);
  } catch (error) {
    return next(error);
  }

  if (!product) {
    res.status(500).json({ message: "no coffee product found" });
  } else {
    res.status(200).json({ product });
  }
};
export const getProductadmin = async (req, res, next) => {
  let product;
  let id = "64ff65c6c87de2656d08b155";

  try {
    product = await Product.find({ admin: id });
  } catch (error) {
    return next(error);
  }

  if (!product) {
    res.status(500).json({ message: "no coffee product found" });
  } else {
    res.status(200).json({ product });
  }
};

export const deletebyid = async (req, res, next) => {
  let prod;
  let id = req.params.id;
  try {
    prod = await Product.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }

  if (!prod) {
    res.status(500).json({ message: " bookings is not deleted with this id" });
  } else {
    res.status(200).json({ message: "deleted" });
  }
};
