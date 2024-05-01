import ContactEmailDTO from "../../../dto/ContactEmailDTO";
import FakeNodeMailer from "../../../libs/Nodemailer/FakeNodemailer"
import SendContactEmailService from "../sendContactEmailService";

describe('Testing ContactEmail Service', () => {

    const nodemailer = new FakeNodeMailer();
    const sendContactEmailService = new SendContactEmailService(nodemailer);

    test("Send correctly ContactEmail", async () => {
        const emailDTO = new ContactEmailDTO("test", "test@test.com", "test", "test")
        const result = await  sendContactEmailService.execute(emailDTO)
        expect(result).toHaveProperty("text")
    } )

    test("Should NOT send email with a Non Valid Email" , async () => {      
        const emailDTO = new ContactEmailDTO("test", "thisIsNotAValidEmail", "test", "test")
         expect(sendContactEmailService.execute(emailDTO))
            .rejects
            .toEqual(new Error ("Informe um email Válido"))
    })

})

