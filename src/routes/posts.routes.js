import { Router } from "express";
import Post from "../models/Post";
import * as postsCtrl from '../controllers/posts.controllers';
import { authJwt } from "../middlewares";
import {verifyToken } from "../middlewares/authJwt";
const router = Router();
const multer  = require('multer');
const path = require('path');


const Storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/posts'),
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: Storage, dest: path.join(__dirname, '../public/posts') })

// Función para crear publicaciones
// Ruta para crear un post

router.post('/', upload.single('image'), async (req, res) => {
    const image = req.file
    const { author, text } = req.body
    const newPost = new Post({ author, text, image });
    const postSaved = await newPost.save()
    console.log(image)

    res.status(201).json(postSaved)
})
// Ruta para obtener un producto
router.get('/', postsCtrl.getPosts)
// Ruta para obtener un solo post por id
router.get('/:postId', postsCtrl.getPostById)
// Ruta para actualizar un post
router.put('/:postId', postsCtrl.updatePostById)
// Ruta para borrar un post
router.delete('/:postId', postsCtrl.deletePostById)
// Ruta para obtener los posts actualizados cronologicamente
router.get('/all/chronologically', postsCtrl.getChronologicalPosts)

export default router;