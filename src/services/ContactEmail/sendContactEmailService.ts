import ContactEmailDTO from "../../dto/ContactEmailDTO";
import FakeNodeMailer from "../../libs/Nodemailer/FakeNodemailer";
import NodeMailer from "../../libs/Nodemailer/Nodemailer";
import isEmailValid from "../../utils/isEmailValid";

class SendContactEmailService{


    nodemailer: NodeMailer | FakeNodeMailer
    constructor(nodemailer: NodeMailer | FakeNodeMailer){
        this.nodemailer = nodemailer
    }

    async execute(emailDTO: ContactEmailDTO){
        const {name, email, subject, messageBody} = emailDTO

        if(!name || !email || !subject || !messageBody){
            throw new Error ("Preencha todos os Campos")
        }
        if(!isEmailValid(email)){
            throw new Error ("Informe um email Válido")
        }

        return this.nodemailer.executeEmailSending(emailDTO)
    }

}

export default SendContactEmailService;