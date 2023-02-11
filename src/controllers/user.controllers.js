import User from "../models/User"
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
    const avatar = req.file
    const newAvatar = `http://localhost:3000/users/${avatar.filename}`
    const user = await User.findById(req.params.userId)
    user.avatar = newAvatar
    console.log(user)
    res.status(200).json(user)
}

//Función para eliminar un usuario
export const deleteUserById = async (req, res) => {
    const {userId} = req.params;
    await User.findByIdAndDelete(userId)
    res.status(204).json()
}