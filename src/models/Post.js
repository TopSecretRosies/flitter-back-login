import { Schema, model } from "mongoose";

 const postSchema = new Schema({
    author: String,
    text: String,
    imgURL: String,
    createdAt: Date,
    updatedAt: Date
},{
    timestamps: true,
    versionKey: false
})

export default model('Post', postSchema)