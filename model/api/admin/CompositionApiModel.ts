import InstrumentApiModel from "./InstrumentApiModel";

export default interface CompositionApiModel {
    author: string;
    name: string;
    instrument: InstrumentApiModel;
    difficulty: number;
    id: number | null;
}