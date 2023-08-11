import Parser from "rss-parser";
import express from "express";
import cors from "cors";

let parser = new Parser();
// let feedURL = "https://netflixtechblog.com/feed";
let feedURLs = [
  v
  "https://dev.to/feed",
  "https://www.reddit.com/.rss",
];

let articles = [];

const parse = feedURLs.map(async (url) => {
  let feed = await parser.parseURL(url);
  //   console.log(feed.title);
  feed.items.forEach((item) => {
    // console.log(`${item.title}\n${item.link}\n\n`);
    return articles.push({ item });
  });
});

// const parse = async (url) => {
//   let feed = await parser.parseURL(url);
//   //   console.log(feed.title);
//   feed.items.forEach((item) => {
//     // console.log(`${item.title}\n${item.link}\n\n`);
//     articles.push({ item });
//   });
// };

// parse(feedURL);
// parse();

let app = express();
app.use(cors());

app.get("/feed", (req, res) => {
  res.send(articles);
});

app.listen("3002", () => {
  console.log("App is listening at http://localhost:3002/feed");
});
