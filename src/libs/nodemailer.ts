import nodemailer from 'nodemailer'
import ContactEmailDTO from '../Dto\'s/ContactEmailDTO';


class NodeMailer{

  transport: nodemailer.Transporter

  constructor(){
    this.transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "400c891be64015",
        pass: "d1a5055b76b002"
      }
    });
  }

  async executeEmailSending(emailDTO: ContactEmailDTO){
    const message = this.buildMessage(emailDTO);
    const info = this.transport.sendMail(message);
    return info;
  }

  private buildMessage(emailDTO: ContactEmailDTO){
    const newMessage = {
      from: `${emailDTO.name} <${emailDTO.email}>`,
      to: `testeapi@hotmail.com`,
      subject: `${emailDTO.subject}`,
      text: `${emailDTO.messageBody}`
    }
    return newMessage
  }

}

export default NodeMailer


