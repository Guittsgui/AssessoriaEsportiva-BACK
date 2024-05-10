class UserDTO{
    readonly name : string;
    readonly email: string;
    readonly password: string;
    readonly confirmPassword: string;
    readonly role: string;
    readonly id?: number;

    constructor(name:string, email:string,password:string,confirmPassword:string, role:string,id?: number){
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.role = role;
        this.id = id;
    }
}

export default UserDTO;