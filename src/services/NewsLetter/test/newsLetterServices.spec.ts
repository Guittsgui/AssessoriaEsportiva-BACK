import InMemoryNewsLetterRepository from "../../../repositories/NewsLetter/inMemoryNewsLetterRepository"
import CreateNewsLetterService from "../createNewsLetterService"


describe('Test newsLetterService', () => {

    
    test('Should add successfully a new EmailNewsletter', async () => {
        const createNewsLetterService = new CreateNewsLetterService(InMemoryNewsLetterRepository)  
        const response = await createNewsLetterService.execute("teste@teste.com")
        expect(response).toHaveProperty('email')
    })

    test('Shouldnt add a Email that already exists', async () => {
        const createNewsLetterService = new CreateNewsLetterService(InMemoryNewsLetterRepository)
        let hasError = false;
        await createNewsLetterService.execute("alreadyExists@alreadyExists.com")
        try {
            await createNewsLetterService.execute("alreadyExists@alreadyExists.com")
        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBe(true)
    })

    test('Shouldnt add successfully without a email', async () => {
        const createNewsLetterService = new CreateNewsLetterService(InMemoryNewsLetterRepository)
        let hasError = false;
        try {
            await createNewsLetterService.execute("")
        } catch (error) {
           hasError = true
        }
        expect(hasError).toBe(true)      
    })

    test('Shout NOT add successfully with a WrongEmail', async () => {
        const createNewsLetterService = new CreateNewsLetterService(InMemoryNewsLetterRepository)
        let hasError = false;
        const wrongEmail = "IstoNaoÉumEmail"
        try {
            await createNewsLetterService.execute(wrongEmail)
        } catch (error) {
            hasError = true
        }
        expect(hasError).toBe(true)  
    })
  

})