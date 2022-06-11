<template>
  <div>
    <el-table
      v-if="students!=null"
      :data="students"
      @row-click="selectStudent"
      size="mini">
      <el-table-column prop="name" :label="$t('students_list_name_label')" align="right">
        <template v-slot="i">
          {{ students[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="semester" :label="$t('students_list_semester_label')" align="center">
        <template v-slot="i">
          {{ students[i.$index].semester }}
        </template>
      </el-table-column>
      <el-table-column prop="instrument" :label="$t('students_list_instrument_label')" align="left">
        <template v-slot="i">
          {{ students[i.$index].instrument }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import StudentApiModel from '~/model/api/StudentApiModel';

@Component
export default class StudentListView extends Vue {

  @Prop({type: [], required: true})
  students!: StudentApiModel[]

  selectStudent(row: any, _column: number, _event: any){
    console.log(row)
    this.$router.push(this.localePath(`/students/${row.studentId}`))
  }

}
</script>
