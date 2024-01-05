import mongoose from "mongoose";
import app from "./app";


async function bootstrap() {
   try {
    mongoose.connect('mongodb+srv://eccomerce:eccomerce@cluster0.hop6izc.mongodb.net/?retryWrites=true&w=majority')
    app.listen(4400,()=>{
        console.log('database connected 4400');
    })
   } catch (error) {

    console.log('database error dfdf');
   }

}

bootstrap()