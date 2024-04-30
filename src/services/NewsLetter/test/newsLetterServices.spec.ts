import InMemoryNewsLetterRepository from "../../../repositories/NewsLetter/inMemoryNewsLetterRepository"
import CreateNewsLetterService from "../createNewsLetterService"



describe('Test newsLetterService', () => {
    
    const createNewsLetterService = new CreateNewsLetterService(InMemoryNewsLetterRepository)  
    
    test('Should add successfully a new EmailNewsletter', async () => {
        const response = await createNewsLetterService.execute("teste@teste.com")
        expect(response).toHaveProperty('email')
    })

    test('Shouldnt add a Email that already exists', async () => {
        await createNewsLetterService.execute("email@email.com")
        await expect(createNewsLetterService.execute("email@email.com"))
            .rejects
            .toEqual(new Error("Email já Existente"))
    })

    test('Shoul NOT add successfully without a email', async () => {
        await expect(createNewsLetterService.execute(""))
            .rejects
            .toEqual(new Error("Email é Obrigatório.")
        )
    })

    test('Shout NOT add successfully with a Invalid Email', async () => {
        await expect(createNewsLetterService.execute("ItsNotAnValidEmail"))
            .rejects
            .toEqual(new Error("Insira um Email Válido"))
    })
  

})