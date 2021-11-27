import UserApiModel from "~/model/api/UserApiModel";
import InstrumentApiModel from "./InstrumentFormApiModel";
import SemesterApiModel from "./SemesterFormApiModel";

export default interface CompositionFormApiModel {
    teacher: number;
    student: number;
    semester: number;
    instrument: number;
}