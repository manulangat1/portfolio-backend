import { Router } from 'express';
import {  BlogController } from '../controllers/blogs';
import { AuthMiddleware } from '../middlewares';

const router = Router()

router.route('/').get(BlogController.getAllBlog).post(AuthMiddleware.isAuth,AuthMiddleware.isAdmin,BlogController.createBlog);
router.route('/:slug').get(BlogController.findBlogBySlug)

export default router;