import express from "express";
import cors from "cors";

let parser = new Parser();
let newsURL = "https://newsapi.org/v2/top-headlines?q=programmation&from=2023-07-10&sortBy=popularity&category=technology&language=en&apiKey=d5008c153b7d43f282b3196bf9a999b4";
// let feedURLs = [
//   "https://dev.to/feed",
//   "https://www.reddit.com/.rss",
//   "https://netflixtechblog.com/feed",
// ];

let articles = [];

// (async () => {
//   let feed = await parser.parseURL(feedURL);
//   console.log(feed.title);
//
//   feed.items.forEach((item) => {
// console.log(item.title + ":" + item.link);
//   });
// })();

const parse = async (url) => {
//   let feed = await parser.parseURL(url);
//     console.log(feed.title);
//   feed.items.forEach((item) => {
//     // console.log(`${item.title}\n${item.link}\n\n`);
//     articles.push({item})
//   });

  const response = await axios({
    model: "text-davinci-003",
    prompt: "Hello world",
    // prompt: `${message}`,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  // console.log(response.data.choices[0].text);
  res.json({
    message: response.data.choices[0].text,
  });
};

parse(newsURL);

let app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.send(articles)
})

const server = app.listen("5000", () => {
  console.log("App is listening at http://localhost:5000");
});

export default server;
