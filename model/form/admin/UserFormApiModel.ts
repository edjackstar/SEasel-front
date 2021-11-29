export default interface UserFormApiModel {
    name: string;
    email:string;
    password:string;
    password2:string;
    role: Role;
    music_school: number | null;
}

type Role = "ADMIN" | "STUDENT" | "TEACHER"