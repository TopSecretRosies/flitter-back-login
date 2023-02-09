import User from '../models/User'
import jwt from 'jsonwebtoken';
import config from '../config';
import Roles from '../models/Roles';
const multer  = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/users'),
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: Storage, dest: path.join(__dirname, '../public/users') })


// Función para el signup
export const signup = async (req, res) => {
    const avatar = req.file
    const{ username, email, password, roles } = req.body;
   // Se crea el usuario
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
        avatar: `http://localhost:3000/users/${avatar.filename}`
    })

    if(roles) {
        const foundRoles = await Roles.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
      
    } else {
        const role = await Roles.findOne({name: "user"})
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser)
    
    // Creamos el token
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 //24horas
    })

    res.status(200).json({token})
    
}



// Función para el signin
export const signin= async (req, res) => {
    
    const userFound = await User.findOne({email: req.body.email}).populate("roles");
    
    
    if(!userFound) {
        return res.status(400).json({message: "User not found"})
    }

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'})
    

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token})
}