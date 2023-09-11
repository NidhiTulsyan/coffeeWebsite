import express from 'express';
import { signUp } from '../Controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/signup',signUp);
userRouter.get('/',(req,res)=>{
    res.json({"message":"hello"});
});

export default userRouter;