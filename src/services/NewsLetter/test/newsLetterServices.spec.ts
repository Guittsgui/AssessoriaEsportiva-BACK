import inMemoryNewsLetterRepository from "../../../repositories/NewsLetter/inMemoryNewsLetterRepository"
import CreateNewsLetterService from "../createNewsLetterService"


describe('Test newsLetterService', () => {

    const createNewsLetterService = new CreateNewsLetterService(inMemoryNewsLetterRepository)
    const emailToBeTested = "teste@teste.com"

    test('Should add successfully a new EmailNewsletter', async () => {
        const response = await createNewsLetterService.execute(emailToBeTested)
        expect(response).toHaveProperty('email')
    })

    test('Shouldnt add a Email that already exists', async () => {
        let hasError = false;
        try {
            await createNewsLetterService.execute(emailToBeTested)
        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBeTruthy
    })

    test('Shouldnt add successfully without a email', async () => {
        let hasError = false;
        try {
            await createNewsLetterService.execute("")
        } catch (error) {
           hasError = true
        }
        expect(hasError).toBeTruthy      
    })

    test('Shouldnt add successfully with a WrongEmail', async () => {
        let hasError = false;
        const wrongEmail = "istoNaoÉumEmail"
        try {
            await createNewsLetterService.execute(wrongEmail)
        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBeTruthy  
    })
  

})