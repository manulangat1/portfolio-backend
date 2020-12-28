import { Router } from 'express';
import { ProjectController  } from '../controllers/projects';
import ProjectsController from '../controllers/projects/ProjectController';
import { AuthMiddleware } from '../middlewares';

const router = Router()

router.route('/').get(ProjectController.getProjects).post(AuthMiddleware.isAuth,AuthMiddleware.isAdmin,ProjectController.createProject);
router.route('/:id').get(ProjectsController.getProjectsbyId)

export default router;