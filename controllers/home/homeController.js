import { HomeService } from '../../services'
import responseHandler from '../../helpers/responsehandler'

export default class HomeController{
    static async homeS(req,res){
        return responseHandler(res,'Home Created',200,{"m":"s"});
    }
    static async createHome(req,res){
        const { title,content } = req.body;
        const homeDetails = {
            title,content
        };
        const   homes = await HomeService.getHome()
        if (homes.length>0){
            return responseHandler(res,'About Already exists',403,homes)
        }
        const home = await HomeService.createHome(homeDetails);
        return responseHandler(res,'Home Created',201,home);
    }
    static async getAllHomes(req,res){
        const home = await HomeService.getHome()

        return responseHandler(res,'Home Fetched',200,home)
    }
}