import express,{Request,Response,NextFunction} from "express"
import { Iuser } from "./User.interface"
import { userServices } from "./user.services";
const createUserController = async(req:Request,res:Response,next:NextFunction) : Promise<Iuser | any> =>{
    try {
        const userdata:Iuser = req.body;
        const result = await userServices.createUserServices(userdata)
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            data : false,
            message : 'something went wrong'
        })
    }
}

export const userController ={
    createUserController
}