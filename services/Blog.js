import { Blog } from '../database/models';


export  default class BlogService{
    static async createblog(details){
        const blog = await Blog.create(details,{raw:true});
        return blog
    }
    static async loadBlogs(){
        const blogs = await Blog.findAll();
        return blogs;
    }
    static async loadBlogBySlugService(slug){
        const blog = await Blog.findOne({where:{slug:slug}});
        return blog;
    }
}