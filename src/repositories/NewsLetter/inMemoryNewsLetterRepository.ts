import crypto, { RandomUUIDOptions, UUID } from 'crypto'

interface newsLetter{
    id: number,
    email: string
}

class InMemoryNewsLetterRepository{

    newsLetterList: newsLetter[]

    constructor(){
        this.newsLetterList = [];
    }

    add(email: string){
        const newsLetterToBeAdded ={
            id: this.newsLetterList.length + 1,
            email
        }
        this.newsLetterList.push(newsLetterToBeAdded)
        return newsLetterToBeAdded;
    }

    verifyByEmail(email:string){
        const hasEmail = this.newsLetterList.find(item => item.email === email)
        return hasEmail;
    }

}

export default new InMemoryNewsLetterRepository();