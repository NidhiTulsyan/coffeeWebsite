import Admin from "../Models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET;
const salt = bcrypt.genSaltSync(10);

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(422).json({ message: "inputs cannot be empty" });
  }
  let admins;
  try {
    admins = await Admin.findOne({ email });
    // console.log(users);
  } catch (error) {
    return next(error);
  }
  const comparePassword = bcrypt.compareSync(password, admins.password);
  if (!comparePassword) {
    res.status(400).json({ success: false, message: "invalid password" });
  }
  const token = jwt.sign({ id: admins._id }, process.env.SECRET, {
    expiresIn: "7d",
  });
  res
    .status(200)
    .json({
      success: true,
      message: "Admin login successful",
      token,
      id: admins._id,
    });
};

export const addAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email && !password && !name) {
    res.status(422).json({ message: "inputs cannot be empty" });
  }
  const findAdmin = await Admin.findOne({ email });
  if (findAdmin) {
    res.status(400).json({ message: "email already exist" });
    return;
  }
  const hashedPassword = bcrypt.hashSync(password, salt);
  let admins;
  try {
    admins = new Admin({ name, email, password: hashedPassword });
    await admins.save();
  } catch (error) {
    return next(error);
  }
  if (!admins) {
    res.status(500).json({ message: "something went wrong" });
  }
  res.status(200).json({ message: "admin data added successfully", admins });
};
