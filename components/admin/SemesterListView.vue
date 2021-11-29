<template>
  <div>
    <el-table
      :border="false"
      :data="semesters"
      size="mini">
      <el-table-column prop="music_school" :label="$t('semester_list_music_school_label')" align="left">
        <template v-slot="i">
          {{ semesters[i.$index].music_school.name }}
        </template>
      </el-table-column>
      <el-table-column prop="number" :label="$t('semester_list_number_label')" align="center">
        <template v-slot="i">
          {{ semesters[i.$index].number }}
        </template>
      </el-table-column>
      <el-table-column prop="count" :label="$t('semester_list_composition_count_label')" align="center">
        <template v-slot="i">
          {{ semesters[i.$index].count }}
        </template>
      </el-table-column>
      <el-table-column prop="min_difficult" :label="$t('semester_list_min_difficulty_label')" align="center">
        <template v-slot="i">
          {{ semesters[i.$index].min_difficult }}
        </template>
      </el-table-column>
      <el-table-column prop="max_difficult" :label="$t('semester_list_max_difficulty_label')" align="center">
        <template v-slot="i">
          {{ semesters[i.$index].max_difficult }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('semester_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/semesters/${semesters[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(semesters[i.$index].id)"/>
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
import SemesterApiModel from '~/model/api/admin/SemesterApiModel';

@Component
export default class SemesterListView extends Vue {

  @Prop({type: [], required: true})
  semesters!: SemesterApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(concertId: number){
    this.$api.admin.semester.removeSemester(concertId)
  }

}
</script>
