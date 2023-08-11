import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
  organization: process.env.ORGANIZATION_KEY,
});

const openai = new OpenAIApi(configuration);

// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{ role: "user", content: "hello world" }],
//   // temperature: 0.7,
// });
// console.log(completion.data.choices[0].message);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello from gpt",
  });
});

// define how chatgpt talks in initial message
const systemMessage = {
  role: "system",
  content: "Explain all concepts like I am 20 years old",
};

app.post("/", async (req, res) => {
  const { message } = req.body;

  //   const newMessage = {
  //     message: `${req.body.text}`,
  //     sender: "UserGPT",
  //     direction: "outgoing",
  //   };
  //   // post all the old Messages & new Message
  //   const newMessages = [...messages, newMessage];

  //   // update our messages state
  //   let apiMessages = newMessages.map((messageObject) => {
  //     let role = "";
  //     if (messageObject.sender === "ChatGPT") {
  //       // response from chatGPT
  //       role = "assistant";
  //     } else {
  //       // request from client
  //       role = "user";
  //     }
  //     return { role: role, content: messageObject.message };
  //   });
  //   try {
  const content = "Hello world";
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    // messages: [{ role: "user", content: content }],
    messages: [{ role: "user", content:  `${message}` }],
    temperature: 0.7,
  });
  res.json({
    bot: response.data.choices[0].message,
    // completion: response.data.choices[0].message.content,
  });
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
});

app.listen(5000, () => {
  console.log(`Chatbot server is running on http://localhost:5000/`);
});
