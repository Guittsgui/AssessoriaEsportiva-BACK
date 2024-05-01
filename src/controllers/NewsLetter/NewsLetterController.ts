import {Request, Response} from "express"
import CreateNewsLetterService from "../../services/NewsLetter/createNewsLetterService";
import NewsLetterRepository from "../../repositories/NewsLetter/NewsLetterRepository";


class NewsLetterController {

    async add(req:Request,res:Response){
        const {email} = req.body         
        try {
            const createNewsLetterService = new CreateNewsLetterService(NewsLetterRepository)
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