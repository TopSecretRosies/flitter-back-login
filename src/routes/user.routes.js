import { Router } from "express";
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import {authJwt, verifySignup}  from '../middlewares'

router.post('/',[
    authJwt.verifyToken,
],userCtrl.createUser);

// Ruta para obtener un usuario
router.get('/', userCtrl.getUsers)
// Ruta para obtener un usuario por id
router.get('/:userId', userCtrl.getUserById)
// Ruta para actualizar la información de un usuario
router.put('/:userId', userCtrl.updateUserById)
// Ruta para eliminar un usuario
router.delete('/:userId', userCtrl.deleteUserById)
// Ruta para per el "perfil" de un usuario con sus publicaciones
router.get('/userposts/:userId', userCtrl.getUserPosts)




export default router;