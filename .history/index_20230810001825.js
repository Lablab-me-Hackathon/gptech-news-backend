import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenvfrom "dotenv";



const app = express();
app.use(cors());

dotenv.config();config();
const CONNECTION_URL = process.env.CONNECTION_URL;


const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log("Server is running on port 5000"));
  })
  .catch((error) => {
    console.log("did not connect to the DB");
  });
