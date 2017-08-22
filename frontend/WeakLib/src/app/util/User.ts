export class User {
    name: string;
    password: string;
    email: string;
    profilePicture: string;
    description: string;
    joined: number;

    constructor(name: string, password: string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}