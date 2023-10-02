import express from "express";
import { login, signUp } from "../Controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.get("/", (req, res) => {
  res.json({ message: "hello" });
});

export default userRouter;
