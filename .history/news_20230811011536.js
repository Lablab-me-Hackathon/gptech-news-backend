import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
import "./feed.js";
let newsURL = process.env.OPENAI_KEY;
  "https://newsapi.org/v2/everything?q=intelligence&from=2023-07-10&sortBy=popularity&language=en&apiKey=d5008c153b7d43f282b3196bf9a999b4";

let app = express();
app.use(cors());

app.get("/news", async (req, res) => {
  const response = await axios(newsURL);
  // console.log(response.data.choices[0].text);
  res.json(response.data);
});

app.listen("3001", () => {
  console.log("App is listening at http://localhost:3001/news");
});
