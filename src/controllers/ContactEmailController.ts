import {Request, Response} from "express"
import isEmailValid from "../utils/isEmailValid";
import nodemailer from 'nodemailer'

class ContactEmailController{

    async addAndSendEmail(req:Request, res:Response){
        const{ name, email, tel, messageBody} = req.body;

        if(!name || !email || !tel || !messageBody ){
            res.status(400).json({msg: "Envie todos os Campos"})
        }

        if(!isEmailValid(email)){
            return res.status(404).json({msg: "Informe um Email válido"})
        }   
    }

}

export default new ContactEmailController()