import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(10)


export async function encryptPassword(password: string){
    return bcrypt.hashSync(password,salt)
}