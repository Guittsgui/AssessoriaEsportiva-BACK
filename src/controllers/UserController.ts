import { Request, Response } from "express";
import isEmailValid from "../utils/isEmailValid";
import UserRepository from "../repositories/UserRepository";
import { User } from "@prisma/client";
import UserDTO from "../Dto's/UserDTO";
import createUserService from "../services/User/createUserService";


class UserController{

    getAll(req: Request, res: Response){
    }

    getByID(){
    }

    async add(req: Request, res: Response){
        const { name, email, password, confirmPassword, role} = req.body
        const userDTO = new UserDTO(name,email,password,confirmPassword,role)

        try {
            await createUserService.execute(userDTO);
            return res.status(201).json({msg: "Usuário cadastrado com Sucesso"})
        } catch (err) {
            if(err instanceof Error){
            return res.status(400).json({msg: err.message})
            }
        }
    }

    update(){

    }

    removeById(){

    }

}

export default new UserController();