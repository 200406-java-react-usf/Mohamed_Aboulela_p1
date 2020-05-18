export class User {
    userId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    roleId: number;

    constructor(id: number, un: string, pw: string, fn: string, ln: string, email: string, role: number){
        this.userId = id;
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.roleId = role;
    }

}
