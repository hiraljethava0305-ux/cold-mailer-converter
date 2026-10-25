import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectionDB = async()=> {
     try{
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongo connected")
     }
     catch(e){
        console.log(e)
         
     }
} 
export default connectionDB

