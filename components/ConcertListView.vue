<template>
  <div>
    <div v-for="concert in concerts"
        :key="concert.date">
      <el-table
        :border="false"
        :data="concert.compositions"
        @row-click="selectComposition"
        size="mini">
        <el-table-column prop="date" :label="$t('concerts_list_date_label')+getDate(concert.date)" align="center">
          <el-table-column prop="name" :label="$t('concerts_list_name_label')" align="center">
            <template v-slot="i">
              {{ concert.compositions[i.$index].name }}
            </template>
          </el-table-column>
          <el-table-column prop="author" :label="$t('concerts_list_author_label')" align="center">
            <template v-slot="i">
              {{ concert.compositions[i.$index].author }}
            </template>
          </el-table-column>
          <el-table-column prop="difficulty" :label="$t('concerts_list_difficulty_label')" align="center">
            <template v-slot="i">
              {{ concert.compositions[i.$index].difficulty }}
            </template>
          </el-table-column>
          <el-table-column prop="averageMark" :label="$t('concerts_list_average_mark_label')" align="center">
            <template v-slot="i">
              {{ concert.compositions[i.$index].averageMark!==null? parseFloat(concert.compositions[i.$index].averageMark).toFixed(2) : "-" }}
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import moment from 'moment';
import {Prop, Watch} from "vue-property-decorator";
import ConcertApiModel from '~/model/api/ConcertApiModel';

@Component
export default class ConcertListView extends Vue {

  @Prop({type: [], required: true})
  concerts!: ConcertApiModel[]

  selectComposition(row: any, _column: number, _event: any, index: number){
    this.$router.push(this.localePath(`/students/${this.$route.params.studentId}/${row.compositionId}`))
  }

  @Watch('concerts')
  onConcertsChange(){
    console.log(this.concerts)
  }

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy')
  }

}
</script>
