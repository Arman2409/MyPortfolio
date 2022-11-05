import mongoose from "../backend/node_modules/mongoose/index.js";
import dotenv from '../backend/node_modules/dotenv/lib/main.js';

dotenv.config();

const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
}; 

async function connect(){
  await mongoose.connect(process.env.MONGODB_URL,options).then((res,err) => {
     if(res){
        console.log(`Databe connected to ${process.env.MONGODB_URL}`)
     }
     }).catch((err) => {
       console.log(err);
    })
}

connect()

export default mongoose