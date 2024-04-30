import { error } from "console"
import isEmailValid from "../../utils/isEmailValid"
import NewsLetterRepository from "../../repositories/NewsLetter/NewsLetterRepository"
import inMemoryNewsLetterRepository from "../../repositories/NewsLetter/inMemoryNewsLetterRepository"

class CreateNewsLetterService {


    newsletterRepository: 
        typeof NewsLetterRepository | 
        typeof inMemoryNewsLetterRepository

    constructor(newsLetterRepository: typeof NewsLetterRepository 
        | typeof inMemoryNewsLetterRepository){
        this.newsletterRepository = newsLetterRepository;
    }

    async execute(email: string){

        if( !email){
            throw new Error("Email é Obrigatório.")
        }      
        if(!isEmailValid(email)){
            throw new Error("Insira um Email Válido")
        }
        const emailAlreadyExists = await NewsLetterRepository.findByEmail(email)

        console.log("********* AQUI VEIO ISSO: " + emailAlreadyExists)

        if(emailAlreadyExists){
            throw new Error("Email já Existente")
        }

        return this.newsletterRepository.add(email);
    }
}


export default CreateNewsLetterService