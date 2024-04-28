import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "400c891be64015",
      pass: "d1a5055b76b002"
    }
  });

  const message = {
    from: `joao <email>`,
    to: 'testeapi@hotmail.com',
    subject: 'Email via Site',
    text: ""
}

export async function executeEmailSending(){
    const info = transport.sendMail(message)
    
}