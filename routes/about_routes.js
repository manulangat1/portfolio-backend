import { Router } from 'express';
import { AboutController  } from '../controllers/about';
import { AuthMiddleware } from '../middlewares'
const router = Router();

router.route('/').get(AboutController.loadAbout).post(AuthMiddleware.isAuth,AuthMiddleware.isAdmin,AboutController.createAbout)

export default router;