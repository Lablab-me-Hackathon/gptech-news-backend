import express, { json } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
console.log(process.env.OPENAI_KEY)

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
  organization: process.env.ORGANIZATION_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello from codex",
  });
});

app.post("/", async (req, res) => {
  // try {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
    // prompt: `${req.body.text}`,
    temperature: 0,
    max_tokens: 7,
    // top_p: 1,
    // frequency_penalty: 0.5,
    // presence_penalty: 0,
  });
  console.log(response.data.choices[0].text);
  // res.json({
  //   data: response.data,
  // });
  // res.status(200).send({
  //   bot: response.data.choices[0].text,
  // });
  // } catch (error) {
  //   res.status(500).send(error);
  // }
});

app.listen(5000, () => {
  console.log(` server on http://localhost:5000/`);
});
