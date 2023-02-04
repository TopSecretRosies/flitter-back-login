import { Router } from "express";
const router = Router()

import * as postsCtrl from '../controllers/posts.controllers'
import { verifyToken } from "../middlewares";


// Ruta para crear un post
router.post('/', verifyToken ,postsCtrl.createPost)
// Ruta para obtener un producto
router.get('/', postsCtrl.getPosts)
// Ruta para obtener un solo post por id
router.get('/:postId', postsCtrl.getPostById)
// Ruta para actualizar un post
router.put('/:postId', postsCtrl.updatePostById)
// Ruta para borrar un post
router.delete('/:postId', postsCtrl.deletePostById)

export default router;