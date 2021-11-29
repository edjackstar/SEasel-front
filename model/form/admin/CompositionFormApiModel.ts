import InstrumentApiModel from "./InstrumentFormApiModel";

export default interface CompositionFormApiModel {
    author: string;
    name: string;
    instrument: number | null;
    difficulty: number | null;
}