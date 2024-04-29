import {Request, Response} from "express"
import isEmailValid from "../utils/isEmailValid";
import NewsLetterRepository from "../repositories/NewsLetterRepository";
import createNewsLetterService from "../services/NewsLetter/createNewsLetterService";
import { assert } from "console";
import { AssertionError } from "assert";


class NewsLetterController {

    async add(req:Request,res:Response){
        const {email} = req.body         
        try {
            await createNewsLetterService.execute(email)
            return res.status(201).json({msg: "Email Salvo Sucesso."})
        } catch (err) {
           if(err instanceof Error){
            return res.status(400).json({msg: err.message})
           }
        }             
    }
}

export default new NewsLetterController();