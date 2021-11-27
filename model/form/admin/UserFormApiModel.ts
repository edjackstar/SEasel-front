export default interface UserFormApiModel {
    name: string;
    email:string;
    password:string;
    role: Role;
    musicSchool: number;
}

type Role = "ADMIN" | "STUDENT" | "TEACHER"