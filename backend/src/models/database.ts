import mongoose, { MongooseError, MongooseQueryOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
}; 

async function connect(){
  await mongoose.connect(process.env.MONGODB_URL,options).then((res: any) => {
     if(res){
        console.log(`Databe connected to ${process.env.MONGODB_URL}`)
     }
     }).catch((err:any) => {
       console.log(err);
    })
}

connect()

export default mongoose