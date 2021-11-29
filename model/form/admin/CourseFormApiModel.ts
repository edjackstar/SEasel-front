import UserApiModel from "~/model/api/UserApiModel";
import InstrumentApiModel from "./InstrumentFormApiModel";
import SemesterApiModel from "./SemesterFormApiModel";

export default interface CompositionFormApiModel {
    teacher: number | null;
    student: number | null;
    semester: number | null;
    instrument: number | null;
}