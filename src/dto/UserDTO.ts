class UserDTO{
    readonly name : string;
    readonly email: string;
    readonly password: string;
    readonly confirmPassword: string;
    readonly role: string;

    constructor(name:string, email:string,password:string,confirmPassword:string, role:string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.role = role;
    }
}

export default UserDTO;