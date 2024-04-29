import { User } from "../types/User";
import { db } from "../libs/prisma";

class UserRepository{

    showAll(){

    }

    showById(){

    }

    async add(user: User){

        //const emailAlreadyExists = 
    }

    alter(){

    }

    delete(){
        
    }

    findByEmailAndPassword(email: string, password: string){
        const searchedUser = db.user.findUnique({
            where:{
                email,
                password
            }
        })
        return searchedUser;
    }



}

export default new UserRepository();