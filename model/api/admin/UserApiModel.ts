import MusicSchoolApiModel from "./MusicSchoolApiModel";

export default interface UserApiModel {
    name: string;
    email:string;
    role: Role;
    music_school: MusicSchoolApiModel;
    id: number | null;
}

type Role = "ADMIN" | "STUDENT" | "TEACHER"