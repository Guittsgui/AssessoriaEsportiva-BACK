import { db } from "../libs/prisma";

class NewsLetterRepository{


    async add(email: string){
        await db.newsLetter.create({
            data: {
                email
            }
        });
    }
}

export default new NewsLetterRepository();