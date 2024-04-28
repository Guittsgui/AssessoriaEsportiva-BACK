import { Request, Response } from "express";
import isEmailValid from "../utils/isEmailValid";
import UserRepository from "../repositories/UserRepository";
import bcrypt from 'bcrypt'

class UserController{

    getAll(req: Request, res: Response){
        res.status(200).json({msg: "Chegou Direitin no Controller"})
    }

    getByID(){

    }

    async add(req: Request, res: Response){
        const { name, email, password, confirmPassword} = req.body
        if(!name || !email || !password || !confirmPassword){
            return res.status(400).json({msg: "Envie todos os Campos"})
        }
        if(!isEmailValid(email)){
            return res.status(400).json({msg: "Envie um email válido"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({msg: "Senhas incompatíveis"})
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,salt)

        const newUser = {
            name,
            email,
            hashedPassword,
        }
        const hasBeenAddedSuccesfully = await UserRepository.add(newUser)
    }

    update(){

    }

    removeById(){

    }



}

export default new UserController();