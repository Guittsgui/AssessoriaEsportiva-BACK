import Bcrypt from "../../libs/Bcrypt";
import UserRepository from "../../repositories/User/UserRepository";
import inMemoryUserRepository from "../../repositories/User/inMemoryUserRepository";
import isEmailValid from "../../utils/isEmailValid";
import dotenv from 'dotenv'
import  JWT  from 'jsonwebtoken';

dotenv.config();

class ValidateUserLoginService{

    userRepository: typeof UserRepository | typeof inMemoryUserRepository

    constructor(userRepository: typeof UserRepository | typeof inMemoryUserRepository
        ){
        this.userRepository = userRepository
    }

    async execute(email: string, password: string){
        if(!email || !password){
            throw new Error("Insira todos os Campos")
        }
        if(!isEmailValid(email)){
            throw new Error("Insira um Email Válido.")
        }

        const user = await this.userRepository.findByEmail(email)
        if(!user){
            throw new Error("Usuário não encontrado. ")
        }

        if(!await Bcrypt.compareEncryptedPassword(password, user.hashedPassword)){
            throw new Error("Senha inválida")
        }
        
        const tokenJwt = JWT.sign(
            {email: user.email},
            process.env.JWT_SECRET_KEY as string,
            {expiresIn: '2h'}
        )
        return tokenJwt;
    }
}

export default ValidateUserLoginService;

   


