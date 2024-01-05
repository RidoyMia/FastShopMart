import mongoose, { Schema } from "mongoose";
import { Iuser } from "./User.interface";

const userSchema = new Schema<Iuser>({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  img : {
    type : String,
    required : true
  },role : {
    type : String,
    enum : ['user','admin','seller'],
    default : 'user'
  }
},{
   timestamps : true
})



export const userModel = mongoose.model('user',userSchema)