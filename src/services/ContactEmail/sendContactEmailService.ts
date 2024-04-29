import ContactEmailDTO from "../../Dto's/ContactEmailDTO";
import NodeMailer from "../../libs/Nodemailer";
import isEmailValid from "../../utils/isEmailValid";

class SendContactEmailService{

    async execute(emailDTO: ContactEmailDTO){
        const {name, email, subject, messageBody} = emailDTO

        if(!name || !email || !subject || !messageBody){
            throw new Error ("Preencha todos os Campos")
        }
        if(!isEmailValid(email)){
            throw new Error ("Informe um email Válido")
        }

        const nodemailer = new NodeMailer();
        nodemailer.executeEmailSending(emailDTO)
    }

}

export default new SendContactEmailService();