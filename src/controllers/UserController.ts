import { Request, Response } from "express";
import isEmailValid from "../utils/isEmailValid";
import UserRepository from "../repositories/UserRepository";
import { encryptPassword } from "../libs/Bcrypt";
import { User } from "@prisma/client";


class UserController{

    getAll(req: Request, res: Response){
    }

    getByID(){
    }

    async add(req: Request, res: Response){
        const { name, email, password, confirmPassword, role} = req.body
        if(!name || !email || !password || !confirmPassword || !role){
            return res.status(400).json({msg: "Envie todos os Campos"})
        }
        if(!isEmailValid(email)){
            return res.status(400).json({msg: "Envie um email válido"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({msg: "Senhas incompatíveis"})
        }

        const hashedPassword = await encryptPassword(password)

        const newUser= {
            name,
            email,
            hashedPassword,
            role
        }
        const hasBeenAddedSuccesfully = await UserRepository.add(newUser)

        if( !hasBeenAddedSuccesfully){
           return res.status(400).json({msg: "email já existente"})
        }
        return res.status(201).json({msg: "Usuário cadastrado com Sucesso."})
    }

    update(){

    }

    removeById(){

    }

   



}

export default new UserController();