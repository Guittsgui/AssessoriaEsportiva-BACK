import { error } from "console"
import isEmailValid from "../../utils/isEmailValid"
import NewsLetterRepository from "../../repositories/NewsLetterRepository"

class CreateNewsLetterService {

    async execute(email: string){

        if( !email){
            throw new Error("Email é Obrigatório.")
        }      
        if(!isEmailValid){
            throw new Error("Insira um Email Válido")
        }
        const emailAlreadyExists = await NewsLetterRepository.findByEmail(email)

        if(emailAlreadyExists){
            throw new Error("Email já Existente")
        }

        return NewsLetterRepository.add(email);
    }
}


export default new CreateNewsLetterService()