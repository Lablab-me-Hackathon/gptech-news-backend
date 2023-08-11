import express from "express";
import cors from "cors";
import axios from "axios";

let newsURL =
  "https://newsapi.org/v2/everythi?q=intelligence&from=2023-07-10&sortBy=popularity&language=en&apiKey=d5008c153b7d43f282b3196bf9a999b4";

let app = express();
app.use(cors());

app.get("/news", async (req, res) => {
  const response = await axios(newsURL);
  // console.log(response.data.choices[0].text);
  res.json({
    message: response.data,
  });
});

const server = app.listen("5000", () => {
  console.log("App is listening at http://localhost:5000/news");
});

export default server;
