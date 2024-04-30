import { Role } from "@prisma/client";

interface User{
    name: string,
    email: string,
    password: string,
    role: Role
}

class InMemoryUserRepository{

    userList: User[]

    constructor(){
        this.userList = []
    }


    add(userToBeAdded: User){
        this.userList.push(userToBeAdded)
        return userToBeAdded
    }

    findByEmail(email: string){
        const findedUser = this.userList.find(item => item.email === email)
        return findedUser
    }

    findByEmailAndPassword(email:string, password: string){
        const findedUser = this.userList.find(item => 
            item.email === email && item.password === password)
        return findedUser
    }


}