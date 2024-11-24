const express = require("express");
const morgan=require('morgan');
require("dotenv").config();
const categoryRoute=require('./routes/categoryRoute')
const ErrorHandler=require('./middleware/ErrorHandler')
const todoRoute=require('./routes/todoRoute')
const connectDB = require("./db");

connectDB();

const app=express();
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/category',categoryRoute);

app.use('/api/todos',todoRoute);

app.all('*',(req,res)=>{
         res.status(400).json({
            success:false,
            message:"page not found"
         })
})


app.use(ErrorHandler)
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
});

