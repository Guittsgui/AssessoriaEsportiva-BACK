import { db } from "../libs/prisma";

class NewsLetterRepository{

    async findByEmail(email:string){
        const findedEmail = await db.newsLetter.findUnique({
            where:{
                email
            }
        })
        return findedEmail;
    }

    async add(email:string){
        const addedEmail = await db.newsLetter.create({
            data: {
                email
            }
        })
        return addedEmail
    }
}

export default new NewsLetterRepository();