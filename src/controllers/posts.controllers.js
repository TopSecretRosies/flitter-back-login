 import jwt from 'jsonwebtoken'
 import config  from '../config';

import Post from "../models/Post"
import User from "../models/User";
const multer  = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/posts'),
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: Storage, dest: path.join(__dirname, '../public/posts') })

// Función para crear publicaciones
export const createPost = async (req, res) => {
    const token = req.headers["x-access-token"]
    if(!token) return res.status(403).json({message: "No token provided"})
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id;
    

    const image = req.file
    const author = await User.findById(req.userId, {password: 0})
    const { text } = req.body
    const newPost = new Post({  
        text,
        author  
    });

    if(image) {
        const newimage = `http://localhost:3000/posts/${image.filename}`
        newPost.image = newimage
    }

    const postSaved = await newPost.save()

    res.status(201).json(postSaved)
}

// Función para obtener publicaciones
export const getPosts = async (req, res) => {
     const post = await Post.find().populate('author', 'username avatar -_id')
     res.json(post)
}

// Función para obtener una publicación por id
export const getPostById = async (req, res) => {
   const post =  await Post.findById(req.params.postId).populate('author', 'username avatar -_id')
   res.status(200).json(post)
}

// Función para actualizar una publicación por id
export const updatePostById = async (req, res) => {
    const updatePost = await Post.findByIdAndUpdate(req.params.postId, req.body, {
        new: true
    }).populate('author', 'username avatar -_id')
    res.status(200).json(updatePost)

}

// Función para borrar publicaciones por id
export const deletePostById = async (req, res) => {
    const {postId} = req.params;
    await Post.findByIdAndDelete(postId)
    res.status(204).json()
}

//Chronological order
export const getChronologicalPosts = async (req, res) => {
    const postsOrderedChronologically =  await Post.find().populate({path: 'author', select: 'username avatar -_id',})
    let result = postsOrderedChronologically.sort((a, b) => new Date(b.createdAt).getTime() -
    new Date(a.createdAt).getTime());

    res.json(result)
}

// Función para filtrar publicaciones
export const getPostByText = async(req, res) => {
    const {text} = req.params;
    console.log(text)
   const post = await Post.find({text}).populate('author', 'username avatar -_id')
   res.json(post)
}

