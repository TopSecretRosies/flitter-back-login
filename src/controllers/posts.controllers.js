import Post from "../models/Post"

import router from "../routes/posts.routes";



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

//Chronologica order

export const getChronologicalPosts = async (req, res) => {
    const postsOrderedChronologically =  await Post.find()
    let result = postsOrderedChronologically.sort((a, b) => new Date(b.createdAt).getTime() -
    new Date(a.createdAt).getTime());

    res.json(result)
}
