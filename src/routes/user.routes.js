import { Router } from "express";
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import {authJwt, verifySignup}  from '../middlewares'

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
],userCtrl.createUser);

// Ruta para obtener un producto
router.get('/', userCtrl.getUsers)




export default router;