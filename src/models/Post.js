import { Schema, model } from "mongoose";

 const postSchema = new Schema({
    author: String,
    text: String,
    imgURL: String,
    date: Date

},{
    timestamps: true,
    versionKey: false
})

export default model('Post', postSchema)