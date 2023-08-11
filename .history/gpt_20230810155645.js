import express, { json } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
  organization: process.env.ORGANIZATION_KEY,
});

const openai = new OpenAIApi(configuration);




app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello from codex",
  });
});

// define how chatgpt talks in initial message
const systemMessage = {
  role: "system",
  content: "Explain all concepts like I am 20 years old",
};

app.post("/", async (req, res) => {
  const newMessage = {
    message: `${req.body.text}`,
    sender: "UserGPT",
    direction: "outgoing",
  };
  // post all the old Messages & new Message
  const newMessages = [...messages, newMessage];

  // update our messages state
  let apiMessages = newMessages.map((messageObject) => {
    let role = "";
    if (messageObject.sender === "ChatGPT") {
      // response from chatGPT
      role = "assistant";
    } else {
      // request from client
      role = "user";
    }
    return { role: role, content: messageObject.message };
  });
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      content: "Hello world",
      //   messages: [systemMessage, ...apiMessages],
      temperature: 0.7,
    });
    res.status(200).send({
      //   bot: response.data.choices[0].text,
      bot: response.data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log(`openai server on http://localhost:5000/`);
});
