import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
const app = express();

app.use(cors());

import "./index";
config();
import "./rss";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
  orgKey: process.env.ORGANIZATION_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello from codex",
  });
});
const newMessage = {
  message: {req.body.text},
  sender: "UserGPT",
  direction: "outgoing",
};
// post all the old Messages & new Message
const newMessages = [...messages, newMessage];

// update our messages state
setMessages(newMessages);
const systemMessage = {
  role: "system",
  content: "Explain all concepts like I am 20 years old",
};

app.post("/", async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
      temperature: 0.7,
    });
    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log(` server on http://localhost:5000/`);
});
