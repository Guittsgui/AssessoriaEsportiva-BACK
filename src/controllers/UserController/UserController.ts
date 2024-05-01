import { Request, Response } from "express";
import UserDTO from "../../dto/UserDTO";
import createUserService from "../../services/User/createUserService";
import validateUserLoginService from "../../services/User/validateUserLoginService";
import CreateUserService from "../../services/User/createUserService";
import UserRepository from "../../repositories/User/UserRepository";
import ValidateUserLoginService from "../../services/User/validateUserLoginService";


class UserController{

    async add(req: Request, res: Response){
        const { name, email, password, confirmPassword, role} = req.body
        const userDTO = new UserDTO(name,email,password,confirmPassword,role)

        const createUserService = new CreateUserService(UserRepository)

        try {
            await createUserService.execute(userDTO);
            console.log('PASSOU TRANQUILO')
            return res.status(201).json({msg: "Usuário cadastrado com Sucesso"})
        } catch (err) {
            if(err instanceof Error){
                console.log("PASSOU C MT ERRO DEU MERDA")
            return res.status(400).json({msg: err.message})
            }
        }
    }

    async validateLogin(req:Request, res:Response){
        const {email, password} = req.body

        const validateUserLoginService = new ValidateUserLoginService(UserRepository)
        try {
            const tokenJwt = await validateUserLoginService.execute(email,password)
            return res.status(200).json({tokenJwt})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({msg: error.message})
            }
        }
    }


}

export default new UserController();