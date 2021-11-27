import MusicSchoolApiModel from "./MusicSchoolApiModel";

export default interface SemesterApiModel {
    musicSchool: MusicSchoolApiModel;
    number: number;
    count: number;
    minDifficult: number;
    maxDifficult: number;
    id: number;
}