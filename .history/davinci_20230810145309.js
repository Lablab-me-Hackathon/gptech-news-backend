import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
const app = express();
app.use(cors());

config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello from codex",
  });
});

app.get("/", async (req, res) => {
  try { 
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Hello world",
      // prompt: `${req.body.text}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    res.status(200).send({
      bot: response.data.choices[0].text,
    });
    console.log(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log(` server on http://localhost:5000/`);
});
