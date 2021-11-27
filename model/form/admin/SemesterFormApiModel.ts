import MusicSchoolApiModel from "./MusicSchoolFormApiModel";

export default interface SemesterFormApiModel {
    musicSchool: number;
    number: number;
    count: number;
    minDifficult: number;
    maxDifficult: number;
}