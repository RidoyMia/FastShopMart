import { Iuser } from "./User.interface";
import { userModel } from "./user.model";

const createUserServices = async(data : Iuser) : Promise<Iuser | any> =>{
    const result = await userModel.create(data)
    return result
}
const GetSingleUserByEmail = async(email : string) :Promise<Iuser | any> =>{
    const result = await userModel.findOne({email : email})
    return result
}




export const userServices = {
    createUserServices,GetSingleUserByEmail
}