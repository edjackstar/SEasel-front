import CompositionApiModel from "./CompositionApiModel";

export default interface ConcertApiModel {
    date: string;
    compositions: CompositionApiModel[];
}