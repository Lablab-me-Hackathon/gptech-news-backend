import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors())

const CONNECTION_URL = process.env.MONGO_URL

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewURLParser:true, useUnifiedTopology:true})..then(() => {
    app.listen(PORT,()=>console.log('Server is running on port 5000'))
}).catch((err) => {
    console.log('did not connect to the DB');
});

