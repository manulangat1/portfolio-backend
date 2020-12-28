import { About } from '../database/models'
import { ErrorHandler } from '../helpers/errors/error'
export default class AboutService {
    static async createAbout(details){
        try{
            const about = await About.create(details,{raw:true})
            return about;
        } catch (err){
            if(err){
                throw new ErrorHandler(404,'An error occured');
            }
            
        }
    };
    static async getAbout(){
        try{
            const about = About.findAll();
            return about;
        } catch(err){
            if (err){
                throw new ErrorHandler(404,'An error occured');
            }
            
        }
    };
    static async updateAbout(id){
        try {
            const about = About.find({where:{id:id}});
            await about.update({title:title});
            return about;
        } catch (err){
            if (err){
                throw new ErrorHandler(404,'An error occured');
            }
        }
    }
}