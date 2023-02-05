import { Router } from "express";
const router = Router()

import * as authCtrl from '../controllers/auth.controllers'
import { verifySignup } from "../middlewares";

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authCtrl.signup)
router.post('/signin', authCtrl.signin)


export default router;