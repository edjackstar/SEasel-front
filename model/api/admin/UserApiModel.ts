import MusicSchoolApiModel from "./MusicSchoolApiModel";

export default interface UserApiModel {
    name: string;
    email:string;
    role: Role;
    musicSchool: MusicSchoolApiModel;
    id: number;
}

type Role = "ADMIN" | "STUDENT" | "TEACHER"