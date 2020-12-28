import { User } from '../database/models'
import {  ErrorHandler,handleError } from '../helpers/errors/error'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export default class UserService {
    static async createUser(userDetails){
        
            const user = await User.create(userDetails,{raw:true});
            return user
    
    }
    static async createAdmin(adminDetails){

            const admin = await User.create(adminDetails,{raw:true});

        return admin;
        
    };

    static async loginUser({email,password}){

            const user = await User.findOne({where:{email:email}});
            const isPasswordMatch = await bcrypt.compareSync(password,user.password);
            if (isPasswordMatch){
                const token = await jwt.sign(user.id,process.env.TOKEN_SECRET);
                const data = {
                    token,
                    user
                };
                return data;
            
        }
    }
}