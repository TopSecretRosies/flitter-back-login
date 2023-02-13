 import jwt from 'jsonwebtoken'
 import config  from '../config';
 import User from '../models/User'
 import Post from '../models/Post'

 
 export const verifyToken = async (req, res, next) => {
   try {
      const token = req.headers["x-access-token"]
  
      if(!token) return res.status(403).json({message: "No token provided"})
  
      const decoded = jwt.verify(token, config.SECRET)
      req.userId = decoded.id;
      console.log(req.userId)
      const user = await User.findById(req.userId, {password: 0})
      const posts =  await Post.find({author: req.userId}).populate('author', 'username -_id')
      let postList = posts.sort((a, b) => new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime());
      
      if(!user) return res.status(404).json({message: "no user found"})
      
      res.json({user, postList})
      return (req.userId)
      next()
   } catch(error) {
      return res.status(401).json({message: "Unauthorized"})
   }
};
  


