import { Router} from 'express';
import user from './user.js';
import home from './home_routes.js';
import about from './about_routes.js';
import projects from './project_routes.js';
import blog from './blog_routes.js';
import aws from './aws.js'
const router = new Router();

router.use('/auth/',user);
router.use('/api/',home);
router.use('/about/',about);
router.use('/project/',projects);
router.use('/blog/',blog);
router.use('/',aws)

export default router;