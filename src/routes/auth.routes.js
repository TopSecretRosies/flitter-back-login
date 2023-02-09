import { Router } from "express";
const router = Router()

import * as authCtrl from '../controllers/auth.controllers'
import { verifySignup, authJwt } from "../middlewares";

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail], authCtrl.upload.single('avatar'), authCtrl.signup)
router.post('/signin', authCtrl.signin)
router.get('/profile', [authJwt.verifyToken])


export default router;