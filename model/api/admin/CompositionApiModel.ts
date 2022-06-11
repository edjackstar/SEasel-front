import InstrumentApiModel from "./InstrumentApiModel";

export default interface CompositionApiModel {
    author: string;
    name: string;
    avg_mark: number;
    instrument: InstrumentApiModel;
    difficulty: number;
    id: number | null;
}