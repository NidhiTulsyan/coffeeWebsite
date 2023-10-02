import express from "express";
import { addAdmin, login } from "../Controllers/adminController.js";
const adminrouter = express.Router();

adminrouter.post("/signup", addAdmin);
adminrouter.post("/login", login);

export default adminrouter;
