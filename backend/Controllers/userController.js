import bcrypt, { genSalt } from "bcrypt";
import User from "../Models/User.js";

const salt = bcrypt.genSaltSync(10);
const Secret = process.env.SECRET;

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  //  console.log(req.body);
  if (!name && !password && !email) {
    res.status(422).json({ message: "fields cannot be empty" });
  }
  let findUser = await User.findOne({ email });
  if (findUser) {
    res.status(400).json({ message: "users already exists" });
    return;
  }
  const hashedPass = bcrypt.hashSync(password, salt);
  let users;
  try {
    users = new User({
      name,
      email,
      password: hashedPass,
    });
    await users.save();
  } catch (error) {
    console.log(error);
  }
  const success = false;
  if (!users) {
    res.status(500).json({ success, message: "something went wrong" });
  }
  res
    .status(200)
    .json({ success: true, message: "data added successfully", users });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(422).json({ message: "inputs cannot be empty" });
  }
  let users;
  try {
    users = await User.findOne({ email });
    // console.log(users);
  } catch (error) {
    return next(error);
  }
  const comparePassword = bcrypt.compareSync(password, users.password);
  const success = false;
  if (!comparePassword) {
    res.status(400).json({ success, message: "invalid password" });
  }
  res
    .status(200)
    .json({ success: true, message: "User login successful", id: users._id });
};
