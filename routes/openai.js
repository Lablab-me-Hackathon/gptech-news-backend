import express from "express";


import { chatbot } from "../controllers/gpt.js";

const router = express.Router();

// These all are API's address

router.post("/gpt", chatbot);

export default router;