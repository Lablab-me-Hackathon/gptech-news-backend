import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors());

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
