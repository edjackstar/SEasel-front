import MusicSchoolApiModel from "./MusicSchoolApiModel";

export default interface ConcertApiModel {
    music_school: MusicSchoolApiModel;
    date: string;
    id: number | null;
}