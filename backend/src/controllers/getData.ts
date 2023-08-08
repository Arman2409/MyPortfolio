import { MongooseError } from "mongoose";
import { Request, Response } from "express";

import AboutData from "../models/AboutData.js";
import Portfolio from "../models/Portfolio.js";
import Skill from "../models/Skill.js";
import LanguageSkill from "../models/LanguageSkill.js";
import CV from "../models/CV.js";
import Link from "../models/Link.js"; 

export default function getData(req:Request,res:Response) {
    const type = req.params.data.replace(":","");
    if( type == "about") {
        AboutData.find({}, (err:MongooseError, result:any) => {
            if (err) {
                console.error(err);
            } else {
                res.json(result);
            }
        })
    };
    if( type == "portfolio") {
        Portfolio.find({}, (err: MongooseError, result: any) => {
            if (err) {
                console.error(err);
            } else {
                res.json(result);
            }
        })
    };
    if( type == "skills") {
        Skill.find({}, (err: MongooseError, result: any) => {
            if (err) {
                console.error(err);
            } else {
                res.json(result);
            }
        })
    };
    if( type == "languages") {
        LanguageSkill.find({}, (err: MongooseError, result: any) => {
            if (err) {
                console.error(err);
            } else {
                res.json(result);
            };
        })
    };
    if( type == "CV") {
        CV.find({}, (err: MongooseError, result: any) => {
            if (err) {
                console.error(err);
            } else {
                res.json(result[0]);
            };
        })
    };
    if( type == "links") {
        Link.find({}, (err: MongooseError, result: any) => {
            if (err) {
                console.error(err);
            } else {
                res.json(result);
            };
        })
    };
}