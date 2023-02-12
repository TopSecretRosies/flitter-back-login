import { Router } from "express";
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import * as authCtrl from '../controllers/auth.controllers'
import * as postsCtrl from '../controllers/posts.controllers';
import { verifySignup, authJwt } from "../middlewares";

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail], authCtrl.upload.single('avatar'), authCtrl.signup)
router.post('/signin', authCtrl.signin)
router.get('/profile', [authJwt.verifyToken])
//router.post('/profile', userCtrl.upload.single('avatar'), userCtrl.updateProfilePhoto)
router.post('/profile', postsCtrl.upload.single('image'), postsCtrl.createPost)

export default router;
