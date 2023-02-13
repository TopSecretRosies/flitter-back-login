import { Router } from "express";
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import * as authCtrl from '../controllers/auth.controllers'
import * as postsCtrl from '../controllers/posts.controllers';
import { verifySignup, authJwt } from "../middlewares";

//Ruta para registrar un usuario
router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail], authCtrl.upload.single('avatar'), authCtrl.signup)
//Ruta para hacer log in
router.post('/signin', authCtrl.signin)
//Ruta para obtener el perfil del usuario que ha hecho log in
router.get('/profile', [authJwt.verifyToken])
//Ruta para actualizar la imagen de perfil
router.post('/profile', userCtrl.upload.single('avatar'), userCtrl.updateProfilePhoto)


export default router;
