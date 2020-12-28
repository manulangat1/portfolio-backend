import responseHandler from '../../helpers/responsehandler'
import { AboutService } from '../../services'


export default class AboutController {
    static async createAbout(req,res){
        const details = {
            ...req.body
        }
        const   abouts = await AboutService.getAbout()
        if (abouts.length>0){
            return responseHandler(res,'About Already exists',403,abouts)
        }
        const about = await AboutService.createAbout(details);
        return responseHandler(res,'About created successfully',201,about);
        // return responseHandler(res,'Home Created',201,home);
    }
    static async loadAbout(req,res){
        const about = await AboutService.getAbout();
        return responseHandler(res,'About created successfully',200,about);
    }
    static async updateAboutController(req,res){
        const about = await AboutService.updateAbout(req.params.id,req.body);
        return responseHandler(res,'About updated',200,about);
    }
}