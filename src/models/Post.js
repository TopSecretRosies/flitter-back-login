import { Schema, model } from "mongoose";

const postSchema = new Schema({
    author: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    text: String,
    image: String,
    createdAt: Date,
    updatedAt: Date, 
    kudos: Number
},{
    timestamps: true,
    versionKey: false
})

export default model('Post', postSchema)