import { Role} from "@prisma/client";
import UserDTO from "../../Dto's/UserDTO";
import Bcrypt from "../../libs/Bcrypt";
import UserRepository from "../../repositories/UserRepository";
import isEmailValid from "../../utils/isEmailValid";

// type UserWithoutAge = Omit<User, 'age'>;

class CreateUserService{

    async execute(userDTO: UserDTO){
        const {name, email, password, confirmPassword, role} = userDTO

        if(!name || !email || !password || !confirmPassword ){
            throw new Error ("Preencha todos os campos")
        }
        if(!isEmailValid){
            throw new Error ("Informe um Email válido")
        }
        if( password !== confirmPassword){
            throw new Error ("Senhas imcompatíveis")
        }

        const hasEmailAlreadyExists = await UserRepository.findByEmail(email)
        if(hasEmailAlreadyExists){
            throw new Error ("Email já Cadastrado")
        }

        const hashedPassword = await Bcrypt.encryptPassword(password);

        const userToBeAdded = {
            name,
            email,
            hashedPassword,
            role: Role.USER
        }
     
        return UserRepository.add(userToBeAdded)
    }
}

export default new CreateUserService();