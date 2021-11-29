import MusicSchoolApiModel from "./MusicSchoolApiModel";

export default interface SemesterApiModel {
    music_school: MusicSchoolApiModel;
    number: number;
    composition_count: number;
    min_difficulty: number;
    max_difficulty: number;
    id: number | null;
}