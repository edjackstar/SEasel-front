import UserApiModel from "./UserApiModel";
import InstrumentApiModel from "./InstrumentApiModel";
import SemesterApiModel from "./SemesterApiModel";

export default interface CompositionApiModel {
    teacher: UserApiModel;
    student: UserApiModel;
    semester: SemesterApiModel;
    instrument: InstrumentApiModel;
    id: number;
}