import mongoose, { Schema, model } from "mongoose";

const postSchema = mongoose.Schema({
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

postSchema.statics.lista = function(filtro, skip, limit) {
    const query = Post.find(filtro).populate('author', 'username avatar -_id');
    query.skip(skip);
    query.limit(limit);
    //query.select(fields);
    //query.sort(sort);
    return query.exec();
}

const Post = mongoose.model('Post', postSchema)
module.exports = Post