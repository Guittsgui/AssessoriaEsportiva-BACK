import Bcrypt from "../../libs/Bcrypt";
import InMemoryUserRepository from "../../repositories/User/inMemoryUserRepository";
import UserRepository from "../../repositories/User/UserRepository";


class ChangeUserPasswordService{

    userRepository: typeof UserRepository | typeof InMemoryUserRepository

    constructor(userRepository: typeof UserRepository | typeof InMemoryUserRepository){
        this.userRepository = userRepository
    }

    async execute(currentPassword: string, newPassword: string, confirmNewPassword:string, userId: number){

        if(!currentPassword || !newPassword || !confirmNewPassword || !userId){
            throw new Error("Preencha todos os Campos")
        }
        if(newPassword !== confirmNewPassword){
            throw new Error("Senhas Imcompatíveis")
        }
        const user = await this.userRepository.findById(userId)
        if(!user){
            throw new Error("Algo deu Errado")
        }
         const doesPassowrdMatch = await Bcrypt.compareEncryptedPassword(currentPassword, user.hashedPassword)
         if(!doesPassowrdMatch){
            throw new Error("Senhas Atual Inválida")
         }

        
        
        // const doesPasswordMatch = Bcrypt.compareEncryptedPassword()
    }

}

export default ChangeUserPasswordService