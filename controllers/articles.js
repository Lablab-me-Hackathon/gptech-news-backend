// logic function
import express from "express";
import mongoose from "mongoose";

import PostArticle from "./../models/postArticle.js";

// implementation of code
export const getArticles = async (req, res) => {
  try {
    // find all articles from DB
    const postArticle = await PostArticle.find();
    res.status(200).json(postArticle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createArticle = async (req, res) => {
  console.log(req.body);
  const { title, article, selectedFile, creator, tags } = req.body;
  const newPostArticle = new PostArticle({
    creator,
    title,
    article,
    selectedFile,
    tags,
  });

  try {
    await newPostArticle.save();
    res.status(201).json(newPostArticle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getArticle = async (req, res) => {
  const { id } = req.params;
  try {
    // find indexed article from DB
    const post = await PostArticle.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateArticle = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { creator, title, article, selectedFile, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json(`No article with id ${id} is found`);

  const updatedArticle = {
    creator,
    title,
    article,
    selectedFile,
    tags,
    _id: id,
  };

  // find indexed article from DB
  await PostArticle.findByIdAndUpdate(id, updatedArticle, { new: true });

  res.json(updateArticle);
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json(`No article with id ${id} is found`);
  await PostArticle.findByIdAndRemove(id);

  res.json({ message: "Article deleted successfully" });
};

export const likeArticle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json(`No article with id ${id} is found`);
  const updatedArticle = await PostArticle.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedArticle);
};
