import express from "express"
import { userController } from "./user.controller"
const userRouter = express.Router()

userRouter.post('/create',userController.createUserController)



export default userRouter;