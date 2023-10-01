import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRouter from "./Router/userRoutes.js";
import mongoose from "mongoose";
import adminrouter from "./Router/adminRoutes.js";
import productRouter from "./Router/productRoutes.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminrouter);
app.use("/product", productRouter);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (req, res) => {
  console.log(`server is running at port ${port} at http://localhost:${port}`);
});
