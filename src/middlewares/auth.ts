import {Request, Response, NextFunction} from 'express'
import JWT from 'jsonwebtoken'
import isEmailValid from '../utils/isEmailValid'
import UserRepository from '../repositories/UserRepository'
import dotenv from 'dotenv';

dotenv.config();

class Auth {

    async login(req: Request, res:Response){
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({msg: "Preencha todos os campos"})
        }
        if(!isEmailValid(email)){
           return res.status(400).json({msg: "Envie um Email válido"})
        }

        const user = await UserRepository.findByEmailAndPassword(email,password)
        // VALIDAR SENHAAAAA
        if(user){
            const token = JWT.sign(
                {id: user.id , email: user.email},
                process.env.JWT_SECRET_KEY as string,
                {expiresIn: '2h'}
            );
            return res.status(200).json({token})
        }
        return res.status(400).json({msg: "Usuário não encontrado"})     
    }

    async private(req: Request, res: Response, next: NextFunction){
        let success = false;
        if(req.headers.authorization){
            const[authType, token] = req.headers.authorization.split(' ')
            if(authType === 'Bearer'){
                try {
                    JWT.verify(
                        token, process.env.JWT_SECRET_KEY as string
                    );
                    success = true
                } catch (error) {                   
                }

            }
        }
        if(success){
            next();
        }else{
            return (res.status(403).json({msg: "Não Autorizado"}))
        }
    }

}

export default new Auth();