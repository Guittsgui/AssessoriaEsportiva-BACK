import { Role } from "@prisma/client"
import InMemoryUserRepository from "../../../repositories/User/inMemoryUserRepository"
import CreateUserService from "../createUserService"
import UserDTO from "../../../dto/UserDTO"
import validateUserLoginService from "../validateUserLoginService"
import FindUserByIDService from "../finduserByIDService"

const validateUserLogiService = new validateUserLoginService(InMemoryUserRepository)
const createUserService = new CreateUserService(InMemoryUserRepository)
const findByIDUserServcice = new FindUserByIDService(InMemoryUserRepository)

describe('Testing CreateUserService', () => {

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
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "istoNaoÉumeMAIL",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        await expect(createUserService.execute(newUser))
            .rejects
            .toEqual(new Error ("Informe um Email válido"))
    } )

    test('Shoul NOT add a User with Diferent Password and ConfirmedPassword', async () => {

        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "teste@teste.com",
            password: "teste123",
            confirmPassword: "123teste",
            role: Role.USER
        }
        
        await expect(createUserService.execute(newUser))
            .rejects
            .toEqual(new Error ("Senhas imcompatíveis"))
    } )

    test('Shout NOT add an Existing Email', async () => {
        const newUser:UserDTO = {
            name: "Usuário Teste",
            email: "alreadyExistsUser@test.com",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }  

        await createUserService.execute(newUser);

        await expect(createUserService.execute(newUser))
            .rejects
            .toEqual(new Error ("Email já Cadastrado"))
        
    })
      
});

describe('Test ValidateUserLoginService', () => {
  
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
 
            await expect(validateUserLogiService.execute("naoexiste@naoexiste.com", "123123"))
                .rejects
                .toEqual(new Error("Usuário não encontrado. ")) 

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
    
        await expect(validateUserLogiService.execute("rightEmail@right.com", "NaoÉaSenhaCorreta"))
            .rejects
            .toEqual(new Error("Senha inválida"))

    })

})

describe('Test findUserBYID Service', () => {
    test("Find a correct user Added" , async () => {
        const testID:UserDTO = {
            id: 2,
            name: "testID",
            email: "testID@testID.com",
            password: "teste123",
            confirmPassword: "teste123",
            role: Role.USER
        }
        const response1 = await createUserService.execute(testID);
        console.log(response1)
        const response = await findByIDUserServcice.execute(2)
        expect(response).toHaveProperty('name')
    })

    test("Cant find a user that doesnt exists" , async () => {
        expect(findByIDUserServcice.execute(1244212411412414))
            .rejects
            .toEqual(new Error("Usuário não Encontrado"))
    })

})