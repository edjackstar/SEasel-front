<template>
  <div>
    <div class="title default-top-margin">{{ $t('edit_course_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="course"
      size="mini"
      label-width="140px">
      <el-form-item prop="teacher" :label="$t('edit_course_label_teacher')">
        <el-select v-model="course.teacher.id">
          <el-option
            v-for="teacher in teachers"
            :key="teacher.id"
            :label="teacher.name"
            :value="teacher.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="student" :label="$t('edit_course_label_student')">
        <el-select v-model="course.student.id">
          <el-option
            v-for="student in students"
            :key="student.id"
            :label="student.name"
            :value="student.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="semester" :label="$t('edit_course_label_semester')">
        <el-select v-model="course.semester.id">
          <el-option
            v-for="semester in semesters"
            :key="semester.id"
            :label="semester.name"
            :value="semester.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="insrument" :label="$t('edit_course_label_instrument')">
        <el-select v-model="course.instrument.id">
          <el-option
            v-for="instrument in instruments"
            :key="instrument.id"
            :label="instrument.name"
            :value="instrument.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('edit_course_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import CourseApiModel from '~/model/api/admin/CourseApiModel'
import UserApiModel from '~/model/api/admin/UserApiModel'
import SemesterApiModel from '~/model/api/admin/SemesterApiModel'
import InstrumentApiModel from '~/model/api/admin/InstrumentApiModel'

@Component({
  layout: 'admin'
})
export default class StudentPage extends Vue{
  
  teachers: UserApiModel[] = []
  students: UserApiModel[] = []
  semesters: SemesterApiModel[] = []
  instruments: InstrumentApiModel[] = []
  
  course: CourseApiModel = {
    student: {
      name: '',
      email: '',
      role: 'STUDENT',
      music_school: {
        name: '',
        id: null
      },
      id: null
    },
    teacher: {
      name: '',
      email: '',
      role: 'TEACHER',
      music_school: {
        name: '',
        id: null
      },
      id: null
    },
    semester: {
      number: 0,
      min_difficulty: 0,
      max_difficulty: 0,
      composition_count: 0,
      music_school: {
        name: '',
        id: null
      },
      id: null
    },
    instrument: {
      name: '',
      id: null
    },
    id: +this.$route.params.id
  }

  loading = false

  async mounted(){
    this.course = await this.$api.admin.course.getCourse(+this.$route.params.id)
    try{
      this.instruments = await this.$api.admin.instrument.getInstrumentList()
      this.teachers = (await this.$api.admin.user.getUserList()).filter((it)=>{return it.role=='TEACHER'})
      this.students = (await this.$api.admin.user.getUserList()).filter((it)=>{return it.role=='STUDENT'})
      this.semesters = await this.$api.admin.semester.getSemesterList()
    }catch(e){
      
    }
  }

  async submit() {
    const course = this.course
    if (this.loading || course ==null) return

    try {
      this.loading = true
      await this.$api.admin.course.updateCourse(course)
      this.$router.push('/admin/courses')
    } catch (e) {
      this.$message({
        message: this.$t('edit_course_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
