//express package
import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import path from 'path';
import bodyParser from "body-parser";

import connectDB from './config/db.js';

import homeRoute from './routes/homeRoute.js';

import authRoute from './routes/authRoute.js';

const app = express();
require('dotenv').config();


connectDB();

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views')); // Use process.cwd() to resolve the path relative to the project's root


app.use(cors());
// Parses JSON data in incoming requests.
app.use(express.json());
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use("/auth", authRoute);

app.use("/home", homeRoute);



app.listen(process.env.PORT, () => {
    console.log(`BE started at port ${process.env.PORT} on ${process.env.MODE}`.bgGreen.green);
})