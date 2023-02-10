import { Schema, model } from "mongoose";
import User from "./User";

 const postSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: String,
    imgURL: String,
    createdAt: Date,
    updatedAt: Date,
    
},{
    timestamps: true,
    versionKey: false
})

export default model('Post', postSchema)