import JWT from 'jsonwebtoken'
import{Request, Response} from 'express'
import isEmailValid from '../utils/isEmailValid'

class LoginController{


    async login(req: Request, res: Response){
        const {email , password} = req.body
        if(!email || !password){
            return res.status(400).json({msg: "Envie todos os Campos"})
        }

        if(!isEmailValid(email)){
            return res.status(400).json({msg: "Envie um Email Válido"})
        }
    }
}

export default new LoginController();