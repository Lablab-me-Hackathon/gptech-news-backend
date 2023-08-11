import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
    title: String,
    content:String,
    creator:String,
    tags: []
})