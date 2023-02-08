import Post from "../models/Post"
const multer  = require('multer')
const upload = multer({ dest: './public/images' })

// Función para crear publicaciones
export const createPost = async (req, res) => {
    
    const { author, text, imgURL } = req.body
    const newPost = new Post({ author, text, imgURL });

    const postSaved = await newPost.save()

    res.status(201).json(postSaved)
}
// Función para obtener publicaciones
export const getPosts = async (req, res) => {
     const post = await Post.find()
     res.json(post)

}

// Función para obtener una publicación por id
export const getPostById = async (req, res) => {
   const post =  await Post.findById(req.params.postId);
   res.status(200).json(post)

    
}

// Función para actualizar una publicación por id
export const updatePostById = async (req, res) => {
    const updatePost = await Post.findByIdAndUpdate(req.params.postId, req.body, {
        new: true
    })
    res.status(200).json(updatePost)

}

// Función para borrar publicaciones por id
export const deletePostById = async (req, res) => {
    const {postId} = req.params;
    await Post.findByIdAndDelete(postId)
    res.status(204).json()
}