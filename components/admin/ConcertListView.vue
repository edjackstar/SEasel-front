<template>
  <div>
    <el-table
      :border="false"
      :data="concerts"
      size="mini">
      <el-table-column prop="music_school" :label="$t('concert_list_music_school_label')" align="left">
        <template v-slot="i">
          {{ concerts[i.$index].music_school.name }}
        </template>
      </el-table-column>
      <el-table-column prop="date" :label="$t('concert_list_date_label')" align="center">
        <template v-slot="i">
          {{ getDate(concerts[i.$index].date) }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('concert_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/concerts/${concerts[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(concerts[i.$index].id)"/>
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
import ConcertApiModel from '~/model/api/admin/ConcertApiModel';

@Component
export default class ConcertListView extends Vue {

  @Prop({type: [], required: true})
  concerts!: ConcertApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(concertId: number){
    this.$api.admin.concert.removeConcert(concertId)
    this.$emit('delete')
  }

}
</script>
