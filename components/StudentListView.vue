<template>
  <div>
    <el-table
      v-if="students!=null"
      :data="devicesOnPage"
      @row-click="selectStudent"
      size="mini">
      <el-table-column prop="name" :label="$t('admin_device_list_label_name')">
        <template v-slot="i">
          {{ students[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="semester" :label="$t('admin_device_list_label_name')">
        <template v-slot="i">
          {{ students[i.$index].semester }}
        </template>
      </el-table-column>
      <el-table-column prop="instrument" :label="$t('admin_device_list_label_name')">
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

  selectStudent(row: number, _column: number, _event: any){
    this.$router.replace(this.localePath(`/student/${row}`))
  }

}
</script>
