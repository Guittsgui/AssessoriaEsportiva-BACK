import nodemailer from 'nodemailer'


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


  async executeEmailSending(){
    const message = this.buildMessage();
    const info = this.transport.sendMail
  }

  private buildMessage(){
    const newMessage = ""
    //     from: `joao <email>`,
    //     to: 'testeapi@hotmail.com',
    //     subject: 'Email via Site',
    //     text: ""

    return newMessage
  }

}

export default NodeMailer


