import { Router } from "express";
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import {authJwt, verifySignup}  from '../middlewares'

router.post('/',[
    authJwt.verifyToken,
],userCtrl.createUser);

// Ruta para obtener un producto
router.get('/', userCtrl.getUsers)
router.get('/:userId', userCtrl.getUserById)
router.put('/:userId', userCtrl.updateUserById)
router.delete('/:userId', userCtrl.deleteUserById)





export default router;