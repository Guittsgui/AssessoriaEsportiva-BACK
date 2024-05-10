import UserRepository from "../../repositories/User/UserRepository";
import InMemoryUserRepository from "../../repositories/User/inMemoryUserRepository";

class FindUserByIDService {


    userRepository: typeof UserRepository | typeof InMemoryUserRepository

    constructor(userRepository: typeof UserRepository | typeof InMemoryUserRepository){
        this.userRepository = userRepository
    }

    async execute(id: number){

        const hasUser = await this.userRepository.findById(id)

        if(!hasUser){
            throw new Error("Usuário não Encontrado")
        }
        return hasUser
    }
}

export default FindUserByIDService