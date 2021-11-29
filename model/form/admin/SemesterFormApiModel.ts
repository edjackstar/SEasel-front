import MusicSchoolApiModel from "./MusicSchoolFormApiModel";

export default interface SemesterFormApiModel {
    music_school: number | null;
    number: number;
    composition_count: number;
    min_difficulty: number;
    max_difficulty: number;
}