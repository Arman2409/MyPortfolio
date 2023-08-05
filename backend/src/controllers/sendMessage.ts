import { Request, Response } from "express";
import { MongooseError } from "mongoose";

import Message from "../models/Message.js";

export default (req: Request, res:Response) => {
   const options = req.body;
   console.log(req.body);
   Message.find({email: options.email}, (err:MongooseError, response:any) => {
      if (err) console.log({error: err});
      if (response) {
         if (response.length > 0) {
            res.json({message: "Already have a message to review"}).end()
            return;
         }
         Message.create(options, (err:MongooseError,resp:any) => {
            if (err) {
               res.json({message: "Error occured"}).end();
               return;
            }
            if (resp) {
               res.json({message: "Message sent"}).end();
               return;
            }
         })
      };
   });
};