import {  Projects } from '../database/models';
import { ErrorHandler } from '../helpers/errors/error';


export default class ProjectsService{
    static async createProjects(details){

        const projects = await Projects.create(details,{raw:true});
        return projects;
    };
    static async loadProjects(){
        const projects = await Projects.findAll();
        return projects;
    };
    static async getProjectsById(id){
        const projects = await Projects.findOne({where:{id:id}});
        return projects;
    }

}