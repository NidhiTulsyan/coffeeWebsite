import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
// import cors from 'cors';
import userRouter from './Router/userRoutes.js';

const app = express();
const port  = process.env.PORT || 5000

// app.use(cors());
app.use(express.json());
// app.use('/user',userRouter);
app.get('/user',(req,res)=>{
    res.json({"message":"hello"});
})

app.listen(port,(req,res)=>{
    console.log(`server is running at port ${port} at https://localhost:${port}`);
})