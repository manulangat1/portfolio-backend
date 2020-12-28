import { Router} from 'express';
import user from './user';
import home from './home_routes';
import about from './about_routes';
import projects from './project_routes';
import blog from './blog_routes';
const router = new Router();

router.use('/auth/',user);
router.use('/api/',home);
router.use('/about/',about);
router.use('/project/',projects);
router.use('/blog/',blog);

export default router;