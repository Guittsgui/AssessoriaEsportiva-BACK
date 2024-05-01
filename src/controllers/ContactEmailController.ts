import {Request, Response} from "express"
import ContactEmailDTO from "../dto/ContactEmailDTO";
import SendContactEmailService from "../services/ContactEmail/sendContactEmailService";
import NodeMailer from "../libs/Nodemailer/Nodemailer";

class ContactEmailController{

    async sendContactEmail(req:Request, res:Response){
        const{ name, email, subject, messageBody} = req.body; 
        const contactEmailDTO = new ContactEmailDTO(name,email,subject,messageBody)

        const nodemailer = new NodeMailer();
        try {
            const sendContactEmailService = new SendContactEmailService(nodemailer);
            await sendContactEmailService.execute(contactEmailDTO)
            return res.status(201).json({msg: "Email Enviado com Sucesso"})
        } catch (err) {
            if(err instanceof Error){
                return  res.status(400).json({msg: err.message})
            }
        }

    }



}

export default new ContactEmailController()