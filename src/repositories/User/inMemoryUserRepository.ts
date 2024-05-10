import { Role } from "@prisma/client";

interface UserToBeAdded {
    id?: number
    name: string,
    email: string,
    role: Role,
    hashedPassword: string
}

class InMemoryUserRepository{

    userList: UserToBeAdded[]

    constructor(){
        this.userList = []
    }


    add(userToBeAdded: UserToBeAdded){
        this.userList.push(userToBeAdded)
        return userToBeAdded
    }

    findByEmail(email: string){
        const findedUser = this.userList.find(item => item.email === email)
        return findedUser
    }

    findByEmailAndPassword(email:string, password: string){
        const findedUser = this.userList.find(item => 
            item.email === email && item.hashedPassword === password)
        return findedUser
    }
    findById(id: number){
        const findedUser = this.userList.find(item =>
            item.id === id)
        
        return findedUser
    }
}

export default new InMemoryUserRepository()