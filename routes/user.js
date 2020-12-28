import { Router } from 'express'
import { UserController } from '../controllers/user'
import { AuthMiddleware } from '../middlewares'

const router = new Router()


router.route('/').post(UserController.createUser)
router.route('/login').post(UserController.loginUser)
router.route('/admin').post(UserController.createAdmin)
router.route('/user/').get(AuthMiddleware.isAuth,AuthMiddleware.isAdmin,UserController.getUser)

export default router