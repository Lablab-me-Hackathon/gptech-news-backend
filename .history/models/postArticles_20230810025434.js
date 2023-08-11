import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
    title: String,
    content:String,
    creator:String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0,
    },
    createdAt: P
    ,
})

var ArticleContent = mongoose.model('ArticleContent', articleSchema);

export default ArticleContent