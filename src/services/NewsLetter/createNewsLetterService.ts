import { error } from "console"
import isEmailValid from "../../utils/isEmailValid"
import NewsLetterRepository from "../../repositories/NewsLetter/NewsLetterRepository"
import InMemoryNewsLetterRepository from "../../repositories/NewsLetter/inMemoryNewsLetterRepository";


class CreateNewsLetterService {


    newsletterRepository: typeof NewsLetterRepository | typeof InMemoryNewsLetterRepository

    constructor(newsLetterRepository: typeof NewsLetterRepository 
        | typeof InMemoryNewsLetterRepository){
        this.newsletterRepository = newsLetterRepository;
    }

    async execute(email: string){

        if( !email){
            throw new Error("Email é Obrigatório.")
        }      
        if(!isEmailValid(email)){
            throw new Error("Insira um Email Válido")
        }
        const emailAlreadyExists = await this.newsletterRepository.findByEmail(email)

        if(emailAlreadyExists){
            throw new Error("Email já Existente")
        }

        return this.newsletterRepository.add(email);
    }
}


export default CreateNewsLetterService