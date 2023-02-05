import { Router } from "express";
const router = Router()

import * as postsCtrl from '../controllers/posts.controllers'
import { authJwt } from "../middlewares";
import { isAdmin, isModerator, verifyToken } from "../middlewares/authJwt";


// Ruta para crear un post
router.post('/', [authJwt.verifyToken, authJwt.isModerator], postsCtrl.createPost)
// Ruta para obtener un producto
router.get('/', postsCtrl.getPosts)
// Ruta para obtener un solo post por id
router.get('/:postId', postsCtrl.getPostById)
// Ruta para actualizar un post
router.put('/:postId', [authJwt.verifyToken, authJwt.isAdmin], postsCtrl.updatePostById)
// Ruta para borrar un post
router.delete('/:postId', [authJwt.verifyToken, authJwt.isAdmin], postsCtrl.deletePostById)

export default router;