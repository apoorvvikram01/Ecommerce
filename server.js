import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './backend/db/index.js';
import {authRoutes} from "./backend/routes/authRoutes.js"
import morgan from 'morgan';


//Rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth',authRoutes)

dotenv.config()
connectDB()
//Rest api
app.get('/',(req,res)=>{
    res.send({
        message: 'Welcome to Ecommerce app!'
    })
})

//port 
const port = process.env.PORT || 8000

//app listen
app.listen(port,()=>{
    console.log(` App is running in ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white)
} )