import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors())

const CONNECTION_URL = process.env.MONGO_URL

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewURLParser:true, use})

