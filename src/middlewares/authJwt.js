 import jwt from 'jsonwebtoken'
 import config  from '../config';
 import User from '../models/User'
 import Post from '../models/Post'
import { set } from 'lodash';
 
 export const verifyToken = async (req, res, next) => {
   try {
      const token = req.headers["x-access-token"]
  
      if(!token) return res.status(403).json({message: "No token provided"})
  
      const decoded = jwt.verify(token, config.SECRET)
      req.userId = decoded.id;

      const user = await User.findById(req.userId, {password: 0})
      const postList =  await Post.find({author: req.userId}).populate('author', 'username -_id')

      if(!user) return res.status(404).json({message: "no user found"})
      
      res.json({user, postList})
  
      next()
   } catch(error) {
      return res.status(401).json({message: "Unauthorized"})
   }
};
