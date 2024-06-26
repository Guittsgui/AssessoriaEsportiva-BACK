import {Request, Response, NextFunction} from 'express'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

class Auth {

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