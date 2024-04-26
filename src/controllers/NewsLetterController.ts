import {Request, Response} from "express"
import isEmailValid from "../utils/isEmailValid";
import NewsLetterRepository from "../repositories/NewsLetterRepository";

class NewsLetterController {

    async add(req:Request,res:Response){

        const email = "guis@guis.com";

        if( !email){
            return res.status(404).json({msg: "Não encontramos o Email."})
        }
        if(!isEmailValid(email)){
            return res.status(404).json({msg: "Informe um Email válido"})
        }

        const isOk = await NewsLetterRepository.add(email);
        
        if(!isOk){
            return res.status(400).json({msg: "Email já Existente"})
        }

        return res.status(200).json({msg: "Email savo com Sucesso"})
              
    }
}

export default new NewsLetterController();