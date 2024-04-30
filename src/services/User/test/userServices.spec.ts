import { Role } from "@prisma/client"
import InMemoryUserRepository from "../../../repositories/User/inMemoryUserRepository"
import CreateUserService from "../createUserService"
import UserDTO from "../../../Dto's/UserDTO"
import validateUserLoginService from "../validateUserLoginService"
import exp from "constants"

const validateUserLogiService = new validateUserLoginService(InMemoryUserRepository)
const createUserService = new CreateUserService(InMemoryUserRepository)

describe('Testing CreateUserService', () => {

    // const createUserService = new CreateUserService(InMemoryUserRepository)


    test('Should add a User successfully', async () => {
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "teste@teste.com",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        const response = await createUserService.execute(newUser);
        expect(response).toHaveProperty('email')
    })

    test('Shoul NOT add a User with a NO-Email-Valid ', async () => {

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
        expect(hasError).toBe(true)
    } )

    test('Shoul NOT add a User with Diferent Password and ConfirmedPassword', async () => {

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
        expect(hasError).toBe(true)
    } )

    test('Shoul NOT add a User with a Email that already Exists', async () => {
        let hasError = false
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "emailAlreadyExists@teste.com",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        await createUserService.execute(newUser)
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
        const newUser:UserDTO = {
            name: "VerifyLoginUser",
            email: "verifyLogin@test.com",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        await createUserService.execute(newUser)
        const response = await validateUserLogiService.execute("verifyLogin@test.com", "teste123")
        expect(response).toBeDefined
    })

    test("Unsuccessfully Login with a Email that doesnt Exists", async () => {
        let hasError = false;
        try {
            await validateUserLogiService.execute("naoexiste@naoexiste.com", "123123")
        } catch (error) {
            hasError=true
        }
        expect(hasError).toBe(true)
    })

    test("Unssuccessfully Login with Wright Email but Wrong Password", async () => {
        const newUser:UserDTO = {
            name: "rightEmailTest",
            email: "rightEmail@right.com",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }

        await createUserService.execute(newUser);

        let hasError = false;

        try {
            await validateUserLogiService.execute("rightEmail@right.com", "NaoÉaSenhaCorreta")
        } catch (error) {
            hasError = true
        }
        expect(hasError).toBe(true)
    })

})