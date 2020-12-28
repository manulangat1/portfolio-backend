import {ProjectsService } from '../../services';
import responseHandler from '../../helpers/responsehandler'
import upload from '../../middlewares/image_upload';
const singleUpload = upload.single("image");

export default class ProjectsController{
    static async createProject(req,res){

        singleUpload(req,res, async function(err){
            if (err) {
                return res.json({
                  success: false,
                  errors: {
                    title: "Image Upload Error",
                    detail: err.message,
                    error: err,
                  },
                });
              }

        const { title,content,githubLink,liveLink} = req.body
        const details = {
            title,content,githubLink,liveLink,image:req.file.location
        }
        const project = await ProjectsService.createProjects(details);
        return responseHandler(res,'Project created successfully',201,project);
        })

        
    }
    static async getProjects(req,res){
        const project = await ProjectsService.loadProjects();

        return responseHandler(res,'Projects loaded successfully',200,project);
    }
    static async getProjectsbyId(req,res){
        const project = await ProjectsService.getProjectsById(req.params.id);
        return responseHandler(res,'Projects loaded successfully',200,project);
    }
}