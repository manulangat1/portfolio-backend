import { UserService }  from '../../services'
import {handleError,ErrorHandler } from '../../helpers/errors/error'
// import { AuthMiddleware } from '../../middlewares'
import responseHandler from '../../helpers/responsehandler'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export  default  class UserController {
    static async createUser(req,res){
        try{
            const email = req.body.email
            const password = await bcrypt.hashSync(req.body.password, 8)
            const userDetails = {
                email,
                password,
                isActive:true,
                isAdmin:false
            }
            const user = await UserService.createUser(userDetails)
            return responseHandler(res,'User created successfully',201,user)
        } catch (err){
            console.log(err)
            return responseHandler(res,err,500)// throw new ErrorHandler(500,'Internal Server Error')
        }       
    }
    static async createAdmin(req,res){
        try{
            const email = req.body.email
            const password = await bcrypt.hashSync(req.body.password, 8)
            const userDetails = {
                email,
                password,
                isActive:true,
                isAdmin:true
            }
            const user = await UserService.createUser(userDetails)
            return responseHandler(res,'User created successfully',201,user)

        } catch (err){
            return responseHandler(res,err,500)
        }       
    }

    static async loginUser(req,res){
        try{
            const { email,password } =  req.body ;
            const user = await UserService.loginUser({email,password});
            return responseHandler(res,'User Logged in successfully',200,user);
        } catch (err){
            return responseHandler(res,err,500);
        }
    }
    static async getUser(req,res){
        const data = {
            user:req.user,
            token:req.token
        }
        return responseHandler(res,'User loaded',200,data)
    }
}