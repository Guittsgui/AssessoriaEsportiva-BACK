import {Request, Response} from "express"
import ContactEmailDTO from "../Dto's/ContactEmailDTO";
import sendContactEmailService from "../services/ContactEmail/sendContactEmailService";

class ContactEmailController{

    async addAndSendEmail(req:Request, res:Response){
        const{ name, email, subject, messageBody} = req.body; 
        const contactEmailDTO = new ContactEmailDTO(name,email,subject,messageBody)

        try {
            const result = await sendContactEmailService.execute(contactEmailDTO)
        } catch (err) {
            if(err instanceof Error){

            }
        }

    }
}

export default new ContactEmailController()