
import { Role, User } from "@prisma/client";
import { db } from "../../libs/prisma";

type userToBeAdded = {
    name: string,
    email: string,
    role: Role,
    hashedPassword: string
}

class UserRepository{

    async add(user: userToBeAdded){

        const userAdded = await db.user.create({
            data: user
        })
        return userAdded;
    }

    async findByEmail(email: string){
        const searchIfEmailAlreadyExists = await db.user.findUnique({
            where: {
                email
            }
        })
        return searchIfEmailAlreadyExists
    }


    findByEmailAndPassword(email: string, hashedPassword: string){
        const searchedUser = db.user.findUnique({
            where:{
                email,
                hashedPassword
            }
        })
        return searchedUser;
    }

    findById(id: number){
        const searchedUser = db.user.findUnique({
            where:{
                id
            }
        })
        return searchedUser
    }



}

export default new UserRepository();