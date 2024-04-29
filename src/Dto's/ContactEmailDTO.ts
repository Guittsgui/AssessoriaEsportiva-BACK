class ContactEmailDTO{
    readonly name: string;
    readonly email: string;
    readonly subject: string;
    readonly messageBody: string;


    constructor(name: string, email: string, subject: string, messageBody: string){
        this.name = name;
        this.email = email;
        this.subject=subject;
        this.messageBody = messageBody
    }

}

export default ContactEmailDTO