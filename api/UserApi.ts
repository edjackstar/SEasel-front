import axios from "axios";
import AccessTokenApiModel from "~/model/api/AccessTokenApiModel";
import LoginFormApiModel from "~/model/api/LoginFormApiModel";
import RefreshTokenFormModel from "~/model/form/RefreshTokenFormModel";
import TokenApiModel from "~/model/api/TokenApiModel";
import StudentApiModel from "~/model/api/StudentApiModel";
import ConcertApiModel from "~/model/api/ConcertApiModel";
import CompositionApiModel from "~/model/api/CompositionApiModel";
import RepetitionApiModel from "~/model/api/RepetitionApiModel";

export default {

  async getStudents(): Promise<StudentApiModel[]> {
    return (await axios.get('/api/teacher/students/')).data as StudentApiModel[]
  },

  async getStudentConcerts(studentId: number): Promise<ConcertApiModel[]> {
    return (await axios.get(`/api/teacher/${studentId}`)).data as ConcertApiModel[]
  },

  async getStudentAvailableConcerts(studentId: number): Promise<ConcertApiModel[]> {
    return (await axios.get(`/api/teacher/${studentId}/concerts`)).data as ConcertApiModel[]
  },

  async getStudentCompositionRepetitions(studentId: number, compositionId: number): Promise<RepetitionApiModel[]> {
    return (await axios.get(`/api/teacher/${studentId}/${compositionId}`)).data as RepetitionApiModel[]
  },
  
}
