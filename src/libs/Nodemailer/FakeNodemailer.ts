import nodemailer from 'nodemailer'
import ContactEmailDTO from '../../dto/ContactEmailDTO';

interface fakeNewMessage{
    from: string,
    to: string,
    subject: string,
    text: string
}

class FakeNodeMailer{

  private sentEmail: fakeNewMessage[]

  constructor(){
   this.sentEmail = [];
  }

  async executeEmailSending(emailDTO: ContactEmailDTO){
    const message = this.buildMessage(emailDTO);
    this.sentEmail.push(message)
    return message
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

export default FakeNodeMailer
