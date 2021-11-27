<template>
  <div>
    <el-table
      :border="false"
      :data="repetitions"
      size="mini">
      <el-table-column prop="time" :label="$t('repetitions_list_date_label')" align="center">
        <template v-slot="i">
          {{ getDate(repetitions[i.$index].time) }}
        </template>
      </el-table-column>
      <el-table-column prop="mark" :label="$t('repetitions_list_mark_label')" align="center">
        <template v-slot="i">
          {{ repetitions[i.$index].mark }}
        </template>
      </el-table-column>
      <el-table-column prop="instrument" :label="$t('repetitions_list_instrument_label')" align="center">
        <template v-slot="i">
          {{ repetitions[i.$index].instrument }}
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
import RepetitionApiModel from '~/model/api/RepetitionApiModel';

@Component
export default class RepetitionListView extends Vue {

  @Prop({type: [], required: true})
  repetitions!: RepetitionApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

}
</script>
