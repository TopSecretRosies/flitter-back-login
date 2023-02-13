import jwt from 'jsonwebtoken'
import config  from '../config';
import User from "../models/User"
import Post from "../models/Post"
const multer  = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/users'),
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: Storage, dest: path.join(__dirname, '../public/users') })

export const createUser = (req, res) => {
    res.json('creating user')
}

// Función para obtener usuarios
export const getUsers = async (req, res) => {
    const user = await User.find()
    res.json(user)

}

//Función para obtener un usuario por id
export const getUserById = async (req, res) => {
  const user =  await User.findById(req.params.userId);
  res.status(200).json(user)
}

//Función para actualizar un usuario por id
export const updateUserById = async (req, res) => {
   const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
       new: true
   })
   res.status(200).json(updateUser)
}

//Función para actualizar la foto de un usuario por id
export const updateProfilePhoto = async (req, res) => {
    try {
        const token = req.headers["x-access-token"]
    
        if(!token) return res.status(403).json({message: "No token provided"})
        console.log(token)
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id;

        const avatar = req.file
        console.log(avatar)
        const newAvatar = `http://localhost:3000/users/${avatar.filename}`

        const user = await User.findById(req.userId, {password: 0})
        user.avatar = newAvatar
        user.save()
        console.log(user)
        res.status(200).json(user)
    } catch(error) {
        return res.status(401).json({message: "Unauthorized"})
     }
}

//Función para eliminar un usuario
export const deleteUserById = async (req, res) => {
    const {userId} = req.params;
    await User.findByIdAndDelete(userId)
    res.status(204).json()
}

//Función para conseguir los posts de un usuario
export const getUserPosts = async (req, res) => {
    const user =  await User.findById(req.params.userId);
    const post =  await Post.find({author: user}).populate({path: 'author', select: 'username -_id'})
    res.status(200).json(post)
}