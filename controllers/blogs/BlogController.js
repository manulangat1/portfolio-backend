import { BlogService } from '../../services';
import responseHandler from '../../helpers/responsehandler';
import upload from '../../middlewares/image_upload';

import slugify from 'slugify';
const singleUpload = upload.single("image");


export default class BlogController{
    static async createBlog(req,res){

        singleUpload(req,res,async function(err){
            if (err){
                return responseHandler(res,'An error occured',400,err);
            }
            const { title,content} = req.body;
            const slug = slugify(title, { lower: true, strict: true });
            const details ={
                title,content,slug,image:req.file.location
            };
            const blog = await BlogService.createblog(details);
            return responseHandler(res,"Blog created successfully",201,blog)
        })
    }
    static async getAllBlog(req,res){
        const blogs = await BlogService.loadBlogs();
        return  responseHandler(res,"Blogs loaded successfully",200,blogs)
    }
    static async  findBlogBySlug(req,res){
        const blogs = await BlogService.loadBlogBySlugService(req.params.slug);
        return  responseHandler(res,"Blogs loaded successfully",200,blogs)
    }
}