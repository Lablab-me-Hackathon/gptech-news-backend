import express from "express";
import cors from "cors";
import axios from "axios";

let parser = new Parser();
let newsURL =
  "https://newsapi.org/v2/top-headlines?q=programmation&from=2023-07-10&sortBy=popularity&category=technology&language=en&apiKey=d5008c153b7d43f282b3196bf9a999b4";


let app = express();
app.use(cors());

app.get("/api", (req, res) => {
    const response = await axios(url);
  // console.log(response.data.choices[0].text);
  res.json({
    message: response.data.choices[0].text,
  });
 
});

const server = app.listen("5000", () => {
  console.log("App is listening at http://localhost:5000");
});

export default server;
