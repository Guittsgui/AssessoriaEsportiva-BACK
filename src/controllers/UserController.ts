import { Request, Response } from "express";
import isEmailValid from "../utils/isEmailValid";
import UserRepository from "../repositories/UserRepository";
import { encryptPassword } from "../libs/bcrypt";


class UserController{

    getAll(req: Request, res: Response){
    }

    getByID(){
    }

    async add(req: Request, res: Response){
        const { name, email, password, confirmPassword, userType} = req.body
        if(!name || !email || !password || !confirmPassword || !userType){
            return res.status(400).json({msg: "Envie todos os Campos"})
        }
        if(!isEmailValid(email)){
            return res.status(400).json({msg: "Envie um email válido"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({msg: "Senhas incompatíveis"})
        }

        const hashedPassword = await encryptPassword(password)

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