import express from "express";

import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  likeArticle,
  updateArticle,
} from "../controllers/articles.js";


const router = express.Router();

// These all are API's address
router.get("/", getArticles);
router.post("/", createArticle);
router.get("/:id", getArticle);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);
router.patch("/:id/likeArticle", likeArticle);


export default router;