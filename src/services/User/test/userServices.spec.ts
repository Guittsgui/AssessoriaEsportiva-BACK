import { Role } from "@prisma/client"
import InMemoryUserRepository from "../../../repositories/User/inMemoryUserRepository"
import CreateUserService from "../createUserService"
import UserDTO from "../../../Dto's/UserDTO"
import validateUserLoginService from "../validateUserLoginService"

const validateUserLogiService = new validateUserLoginService(InMemoryUserRepository)
const createUserService = new CreateUserService(InMemoryUserRepository)

describe('Testing CreateUserService', () => {

    // const createUserService = new CreateUserService(InMemoryUserRepository)
    const emailToBeTested = "teste@teste.com"

    test('Should add a User successfully', async () => {
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: emailToBeTested,
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        const response = await createUserService.execute(newUser);
        expect(response).toHaveProperty('email')
    })

    test('Shouldnt add a User with a NO-Email-Valid ', async () => {

        let hasError = false
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "istoNaoÉumeMAIL",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        try {
            await createUserService.execute(newUser)
        } catch (error) {
            hasError = true;
        }
    } )

    test('Shouldnt add a User with Diferent Password and ConfirmedPassword', async () => {

        let hasError = false
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "teste@teste.com",
            password: "teste123",
            confirmPassword: "123teste",
            role: Role.USER
        }
        try {
            await createUserService.execute(newUser)
        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBeTruthy
    } )

    test('Shouldnt add a User with a Email that already Exists', async () => {
        let hasError = false
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: emailToBeTested,
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        try {
            await createUserService.execute(newUser)
        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBeTruthy
    })
})


describe('Test ValidateUserLoginService', () => {
    // const validateUserLogiService = new validateUserLoginService(InMemoryUserRepository)
    
    test("Verify Correctly Email and Password Login" , async () => {
        const response = await validateUserLogiService.execute("teste@teste.com", "teste123")
        console.log(response)
    })

    test("Unsuccessfully Login with a Email that doesnt Exists", async () => {
        let hasError = false;
        try {
            await validateUserLogiService.execute("naoexiste@naoexiste.com", "123123")
        } catch (error) {
            hasError=true
        }
        expect(hasError).toBeTruthy
    })

    test("Unssuccessfully Login with a Email that exists butPassword Doesnt.", async() => {
        let hasError = false;
        try {
            await validateUserLogiService.execute("teste@teste.com", "123123")
        } catch (error) {
            hasError=true
        }
        expect(hasError).toBeTruthy
    })

})