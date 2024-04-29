import {Request, Response, response} from "express"
import ContactEmailDTO from "../Dto's/ContactEmailDTO";
import sendContactEmailService from "../services/ContactEmail/sendContactEmailService";

class ContactEmailController{

    async sendContactEmail(req:Request, res:Response){
        const{ name, email, subject, messageBody} = req.body; 
        const contactEmailDTO = new ContactEmailDTO(name,email,subject,messageBody)

        try {
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