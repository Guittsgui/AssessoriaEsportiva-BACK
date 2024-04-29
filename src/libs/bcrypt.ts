import bcrypt from 'bcrypt'
class Bcrypt{
    
    salt: string

    constructor(){
        this.salt = bcrypt.genSaltSync(10);
    }

    async encryptPassword(password: string){
        return await bcrypt.hashSync(password,this.salt)
    }

    async compareEncryptedPassword(password:string, hashedPassword:string){
        return await bcrypt.compare(password,hashedPassword)
    }

}
export default new Bcrypt();

