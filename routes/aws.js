

import { Router } from 'express';
import { HomeController } from '../controllers/home';
import { AuthMiddleware } from '../middlewares';

const router = Router()

router.route('/').get(HomeController.homeS)


export default router;
