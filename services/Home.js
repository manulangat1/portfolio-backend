import { Home} from '../database/models'


export default class HomeService{
    static async createHome(homeDetails){
        const home = await Home.create(homeDetails,{raw:true});
        return home;
    }
    static async getHome(){
        const home = await Home.findAll()
        return home
    }
}