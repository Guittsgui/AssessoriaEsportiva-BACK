import Bcrypt from "../../libs/Bcrypt";
import UserRepository from "../../repositories/User/UserRepository";
import isEmailValid from "../../utils/isEmailValid";
import dotenv from 'dotenv'
import  JWT  from 'jsonwebtoken';

dotenv.config();

class ValidateUserLoginService{

    async execute(email: string, password: string){
        if(!email || !password){
            throw new Error("Insira todos os Campos")
        }
        if(!isEmailValid){
            throw new Error("Insira um Email Válido.")
        }

        const user = await UserRepository.findByEmail(email)
        if(!user){
            throw new Error("Usuário não encontrado. ")
        }

        if(!await Bcrypt.compareEncryptedPassword(password, user.hashedPassword)){
            throw new Error("Senha inválida")
        }
        
        const tokenJwt = JWT.sign(
            {id: user.id , email: user.email},
            process.env.JWT_SECRET_KEY as string,
            {expiresIn: '2h'}
        )
        return tokenJwt;
    }
}

export default new ValidateUserLoginService();

   


