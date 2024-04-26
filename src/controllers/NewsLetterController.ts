import {Request, Response} from "express"
import isEmailValid from "../utils/isEmailValid";
import NewsLetterRepository from "../repositories/NewsLetterRepository";

class NewsLetterController {

    add(req:Request,res:Response){

        const email = "gui@gui.com";

        if( !email){
            return res.status(404).json({msg: "Não encontramos o Email."})
        }
        if(!isEmailValid(email)){
            return res.status(404).json({msg: "Informe um Email válido"})
        }

        NewsLetterRepository.add(email)
        return res.status(200).json({msg: "Email Adicionado com Sucesso"})
    }
}

export default new NewsLetterController();