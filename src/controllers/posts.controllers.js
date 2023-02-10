import Post from "../models/Post"
import User from "../models/User";
import router from "../routes/posts.routes";

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

//Chronologica order

export const getChronologicalPosts = async (req, res) => {
    const postsOrderedChronologically =  await Post.find()
    let result = postsOrderedChronologically.sort((a, b) => new Date(b.createdAt).getTime() -
    new Date(a.createdAt).getTime());

    res.json(result)
}

//post por userid

export const getUserPosts = async (req, res) => {
    const result = await Post.aggregate(
        [
        {
            $lookup:
              {
                from: "User",
                localField: "author",
                foreignField: "_id",
                as: "userauthor"
              }
            },
            {$unwind: "$userauthor"}
         
    ])
    res.json(result)
}
//export const getUserPosts = async (req, res) => {
  //  const allUserPosts = await Post.find({user:req.user._id}).populate("Posts")
    //res.json({allUserPosts})
//}

//export const getUserPosts = async (req, res) => {
  //  Post.find({user:req.user._id}).populate("User")
    //.then(userposts =>{
   //res.json({userposts});
//})};
