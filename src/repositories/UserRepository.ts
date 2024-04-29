
import { User } from "@prisma/client";
import { db } from "../libs/prisma";

class UserRepository{

    showAll(){

    }

    showById(){

    }

    async add(user: any){
        const email = user.email
        const userWithThisEmailAlreadyExists = await db.user.findUnique({
            where: {
                email
            }
        })
        if(userWithThisEmailAlreadyExists){
            return null;
        }
        const addedUser = await db.user.create({
            data: user
        })
        return addedUser
    }

    alter(){

    }

    delete(){
        
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



}

export default new UserRepository();