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

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });

        const emailToBeSent = {
            name,
            email,
            tel,
            messageBody
        }

        //const data = await transporter.sendMail(emailToBeSent)
    }

}

export default new ContactEmailController()