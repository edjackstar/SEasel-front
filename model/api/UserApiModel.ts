import ConcertApiModel from "./ConcertApiModel";

export default interface UserApiModel {
    name: string;
    concerts: ConcertApiModel[];
}