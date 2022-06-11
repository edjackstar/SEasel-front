<template>
  <div>
    <el-table
      :border="false"
      :data="courses"
      size="mini">
      <el-table-column prop="teacher" :label="$t('course_list_teacher_label')" align="left">
        <template v-slot="i">
          {{ courses[i.$index].teacher.name }}
        </template>
      </el-table-column>
      <el-table-column prop="student" :label="$t('course_list_student_label')" align="center">
        <template v-slot="i">
          {{ courses[i.$index].student.name }}
        </template>
      </el-table-column>
      <el-table-column prop="semester" :label="$t('course_list_semester_label')" align="center">
        <template v-slot="i">
          {{ courses[i.$index].semester.number }}
        </template>
      </el-table-column>
      <el-table-column prop="instrument" :label="$t('course_list_instrument_label')" align="center">
        <template v-slot="i">
          {{ courses[i.$index].instrument.name }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('course_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/courses/${courses[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(courses[i.$index].id)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import moment from 'moment';
import {Prop, Watch} from "vue-property-decorator";
import CourseApiModel from '~/model/api/admin/CourseApiModel';

@Component
export default class ConcertListView extends Vue {

  @Prop({type: [], required: true})
  courses!: CourseApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(courseId: number){
    this.$api.admin.course.removeCourse(courseId)
    this.$emit('delete')
  }

}
</script>
