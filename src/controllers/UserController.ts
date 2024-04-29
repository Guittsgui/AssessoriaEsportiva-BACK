import { Request, Response } from "express";
import UserDTO from "../Dto's/UserDTO";
import createUserService from "../services/User/createUserService";
import validateUserLoginService from "../services/User/validateUserLoginService";


class UserController{

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

    async validateLogin(req:Request, res:Response){
        const {email, password} = req.body

        try {    
            const tokenJwt = validateUserLoginService.execute(email,password)
            return res.status(200).json({msg: "Login Realizaod com Sucesso", tokenJwt}) 
        } catch (err) {
            if(err instanceof Error){
                return res.status(401).json({msg: err.message})
            }
        }
    }


}

export default new UserController();