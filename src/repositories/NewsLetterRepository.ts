import { db } from "../libs/prisma";

class NewsLetterRepository{


    async add(email: string){    
        try {
            await db.newsLetter.create({
                data:{
                    email
                }
            })
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default new NewsLetterRepository();