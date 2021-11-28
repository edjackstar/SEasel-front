import StudentApiModel from "~/model/api/StudentApiModel"
import ConcertApiModel from "~/model/api/ConcertApiModel"
import ConcertAdminApiModel from "~/model/api/admin/ConcertApiModel"
import RepetitionApiModel from "~/model/api/RepetitionApiModel"
import UserApiModel from "~/model/api/UserApiModel"
import UserAdminApiModel from "~/model/api/admin/UserApiModel"
import CompositionApiModel from "~/model/api/CompositionApiModel"
import CompositionAdminApiModel from "~/model/api/admin/CompositionApiModel"
import MusicSchoolApiModel from "~/model/api/admin/MusicSchoolApiModel"
import SemesterApiModel from "~/model/api/admin/SemesterApiModel"
import InstrumentApiModel from "~/model/api/admin/InstrumentApiModel"
import CourseApiModel from "~/model/api/admin/CourseApiModel"
import MusicSchoolFormApiModel from "~/model/form/admin/MusicSchoolFormApiModel"
import SemesterFormApiModel from "~/model/form/admin/SemesterFormApiModel"
import CompositionFormApiModel from "~/model/form/admin/CompositionFormApiModel"
import ConcertFormApiModel from "~/model/form/admin/ConcertFormApiModel"
import CourseFormApiModel from "~/model/form/admin/CourseFormApiModel"
import UserFormApiModel from "~/model/form/admin/UserFormApiModel"
import InstrumentFormApiModel from "~/model/form/admin/InstrumentFormApiModel"

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

interface Api {
  user: ApiUser,
  admin: ApiAdmin,
}

interface ApiUser {
  getStudents(): Promise<StudentApiModel[]>
  getStudentConcerts(studentId: number): Promise<UserApiModel>
  setStudentConcert(studentId: number, selectedConcert: number): void
  getComposition(compositionId: number): Promise<CompositionApiModel>
  getStudentAvailableConcerts(studentId: number): Promise<ConcertApiModel[]>
  getStudentCompositionRepetitions(studentId: number, compositionId: number): Promise<RepetitionApiModel[]> 
}

interface ApiAdmin {
  musicSchool: ApiAdminMusicSchool,
  user: ApiAdminUser,
  concert: ApiAdminConcert,
  semester: ApiAdminSemester,
  instrument: ApiAdminInstrument,
  composition: ApiAdminComposition,
  course: ApiAdminCourse,
}

interface ApiAdminMusicSchool{
  getMusicSchoolList(): Promise<MusicSchoolApiModel[]>
  getMusicSchool(musicSchoolId: number): Promise<MusicSchoolApiModel>
  removeMusicSchool(musicSchoolId: number): void
  updateMusicSchool(musicSchool: MusicSchoolApiModel): void
  addMusicSchool(musicSchool: MusicSchoolApiModel): void
}
  
interface ApiAdminUser{
  getUserList(): Promise<UserAdminApiModel[]>
  getUser(userId: number): Promise<UserAdminApiModel>
  removeUser(userId: number): void
  updateUser(user: UserAdminApiModel): void
  addUser(user: UserAdminApiModel): void
}

interface ApiAdminConcert{
  getConcertList(): Promise<ConcertAdminApiModel[]>
  getConcert(concertId: number): Promise<ConcertAdminApiModel>
  removeConcert(concertId: number): void
  updateConcert(concert: ConcertAdminApiModel): void
  addConcert(concert: ConcertAdminApiModel): void
}

interface ApiAdminSemester{
  getSemesterList(): Promise<SemesterApiModel[]>
  getSemester(semesterId: number): Promise<SemesterApiModel>
  removeSemester(semesterId: number): void
  updateSemester(semester: SemesterApiModel): void
  addSemester(semester: SemesterApiModel): void
}

interface ApiAdminInstrument{
  getInstrumentList(): Promise<InstrumentApiModel[]>
  getInstrument(instrumentId: number): Promise<InstrumentApiModel>
  removeInstrument(instrumentId: number): void
  updateInstrument(instrument: InstrumentApiModel): void
  addInstrument(instrument: InstrumentApiModel): void
}

interface ApiAdminComposition{
  getCompositionList(): Promise<CompositionAdminApiModel[]>
  getComposition(compositionId: number): Promise<CompositionAdminApiModel>
  removeComposition(compositionId: number): void
  updateComposition(composition: CompositionAdminApiModel): void
  addComposition(composition: CompositionAdminApiModel): void
}

interface ApiAdminCourse{
  getCourseList(): Promise<CourseApiModel[]>
  getCourse(courseId: number): Promise<CourseApiModel>
  removeCourse(courseId: number): void
  updateCourse(course: CourseApiModel): void
  addCourse(course: CourseApiModel): void
}

export default (ctx:any, inject:any) => {
  const $axios = ctx.$axios
  console.log('here')
  const plugin = {
    user: {
      async getStudents(): Promise<StudentApiModel[]> {
        return (await $axios.get('/api/teacher/students/')).data
      },
      async getStudentConcerts(studentId: number): Promise<UserApiModel> {
        return (await $axios.get(`/api/student/${studentId}/`)).data
      },
      async setStudentConcert(studentId: number, selectedConcert: number){
        const body = {
          concertId: selectedConcert
        }
        await $axios.post(`/api/student/${studentId}/recommend/`, body)
      },
      async getComposition(compositionId: number): Promise<CompositionApiModel> {
        return (await $axios.get(`/api/compositions/${compositionId}/`)).data
      },
      async getStudentAvailableConcerts(studentId: number): Promise<ConcertApiModel[]> {
        return (await $axios.get(`/api/student/${studentId}/concerts/`)).data
      },
      async getStudentCompositionRepetitions(studentId: number, compositionId: number): Promise<RepetitionApiModel[]> {
        return (await $axios.get(`/api/student/${studentId}/${compositionId}/`)).data
      },
    },
    admin: {

      musicSchool: {
        async getMusicSchoolList(): Promise<MusicSchoolApiModel[]> {
          return (await $axios.get(`/api/schools/`)).data
        },
        async getMusicSchool(musicSchoolId: number): Promise<MusicSchoolApiModel> {
          return (await $axios.get(`/api/schools/${musicSchoolId}/`)).data
        },
        async removeMusicSchool(musicSchoolId: number) {
          await $axios.delete(`/api/schools/${musicSchoolId}/`)
        },
        async updateMusicSchool(musicSchool: MusicSchoolApiModel) {
          const body: MusicSchoolFormApiModel = {
            name: musicSchool.name
          }
          await $axios.post(`/api/schools/${musicSchool.id}/`, body)
        },
        async addMusicSchool(musicSchool: MusicSchoolApiModel) {
          const body: MusicSchoolFormApiModel = {
            name: musicSchool.name
          }
          await $axios.post(`/api/schools/`, body)
        },
      },

      user: {
        async getUserList(): Promise<UserAdminApiModel[]> {
          return (await $axios.get(`/api/users/`)).data
        },
        async getUser(userId: number): Promise<UserAdminApiModel> {
          return (await $axios.get(`/api/users/${userId}/`)).data
        },
        async removeUser(userId: number) {
          await $axios.delete(`/api/users/${userId}/`)
        },
        async updateUser(user: UserAdminApiModel, password: string) {
          const body: UserFormApiModel = {
            name: user.name,
            email: user.email,
            password: password,
            role: user.role,
            musicSchool: user.musicSchool.id
          }
          await $axios.post(`/api/users/${user.id}/`, body)
        },
        async addUser(user: UserAdminApiModel, password: string) {
          const body: UserFormApiModel = {
            name: user.name,
            email: user.email,
            password: password,
            role: user.role,
            musicSchool: user.musicSchool.id
          }
          await $axios.post(`/api/users/`, body)
        }
      },
      
      
      concert: {
        async getConcertList(): Promise<ConcertAdminApiModel[]> {
          return (await $axios.get(`/api/concerts/`)).data
        },
        async getConcert(concertId: number): Promise<ConcertAdminApiModel> {
          return (await $axios.get(`/api/concerts/${concertId}/`)).data
        },
        async removeConcert(concertId: number) {
          await $axios.delete(`/api/concerts/${concertId}/`)
        },
        async updateConcert(concert: ConcertAdminApiModel) {
          const body: ConcertFormApiModel = {
            name: concert.name,
            date: concert.date
          }
          await $axios.post(`/api/concerts/${concert.id}/`, body)
        },
        async addConcert(concert: ConcertAdminApiModel) {
          const body: ConcertFormApiModel = {
            name: concert.name,
            date: concert.date
          }
          await $axios.post(`/api/concerts/`, body)
        },
      },
      
      semester: {
        async getSemesterList(): Promise<SemesterApiModel[]> {
          return (await $axios.get(`/api/semesters/`)).data
        },
        async getSemester(semesterId: number): Promise<SemesterApiModel> {
          return (await $axios.get(`/api/semesters/${semesterId}/`)).data
        },
        async removeSemester(semesterId: number) {
          await $axios.delete(`/api/semesters/${semesterId}/`)
        },
        async updateSemester(semester: SemesterApiModel) {
          const body: SemesterFormApiModel = {
            musicSchool: semester.musicSchool.id,
            number: semester.number,
            count: semester.count,
            minDifficult: semester.minDifficult,
            maxDifficult: semester.maxDifficult
          }
          await $axios.post(`/api/semesters/${semester.id}/`, body)
        },
        async addSemester(semester: SemesterApiModel) {
          const body: SemesterFormApiModel = {
            musicSchool: semester.musicSchool.id,
            number: semester.number,
            count: semester.count,
            minDifficult: semester.minDifficult,
            maxDifficult: semester.maxDifficult
          }
          await $axios.post(`/api/semesters/`, body)
        },
      },
      
      instrument: {
        async getInstrumentList(): Promise<InstrumentApiModel[]> {
          return (await $axios.get(`/api/instruments/`)).data
        },
        async getInstrument(instrumentId: number): Promise<InstrumentApiModel> {
          return (await $axios.get(`/api/instruments/${instrumentId}/`)).data
        },
        async removeInstrument(instrumentId: number) {
          await $axios.delete(`/api/instruments/${instrumentId}/`)
        },
        async updateInstrument(instrument: InstrumentApiModel) {
          const body: InstrumentFormApiModel = {
            name: instrument.name
          }
          await $axios.post(`/api/instruments/${instrument.id}/`, body)
        },
        async addInstrument(instrument: InstrumentApiModel) {
          const body: InstrumentFormApiModel = {
            name: instrument.name
          }
          await $axios.post(`/api/instruments/`, body)
        },
      },
      
      composition: {
        async getCompositionList(): Promise<CompositionAdminApiModel[]> {
          return (await $axios.get(`/api/compositions/`)).data
        },
        async getComposition(compositionId: number): Promise<CompositionAdminApiModel> {
          return (await $axios.get(`/api/compositions/${compositionId}/`)).data
        },
        async removeComposition(compositionId: number) {
          await $axios.delete(`/api/compositions/${compositionId}/`)
        },
        async updateComposition(composition: CompositionAdminApiModel) {
          const body: CompositionFormApiModel = {
            author: composition.author,
            name: composition.name,
            instrument: composition.instrument.id,
            difficulty: composition.difficulty
          }
          await $axios.post(`/api/compositions/${composition.id}/`, body)
        },
        async addComposition(composition: CompositionAdminApiModel) {
          const body: CompositionFormApiModel = {
            author: composition.author,
            name: composition.name,
            instrument: composition.instrument.id,
            difficulty: composition.difficulty
          }
          await $axios.post(`/api/compositions/`, body)
        },
      },
      
      course: {
        async getCourseList(): Promise<CourseApiModel[]> {
          return (await $axios.get(`/api/courses/`)).data
        },
        async getCourse(courseId: number): Promise<CourseApiModel> {
          return (await $axios.get(`/api/courses/${courseId}/`)).data
        },
        async removeCourse(courseId: number) {
          await $axios.delete(`/api/courses/${courseId}/`)
        },
        async updateCourse(course: CourseApiModel) {
          const body: CourseFormApiModel = {
            teacher: course.teacher.id,
            student: course.student.id,
            semester: course.semester.id,
            instrument: course.instrument.id
          }
          await $axios.post(`/api/courses/${course.id}/`, body)
        },
        async addCourse(course: CourseApiModel) {
          const body: CourseFormApiModel = {
            teacher: course.teacher.id,
            student: course.student.id,
            semester: course.semester.id,
            instrument: course.instrument.id
          }
          await $axios.post(`/api/courses/`, body)
        },
      }
    }
  }

  ctx.$api = plugin
  inject('api', plugin)
}