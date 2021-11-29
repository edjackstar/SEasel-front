<template>
  <div>
    <el-table
      :border="false"
      :data="musicSchools"
      size="mini">
      <el-table-column prop="name" :label="$t('music_school_list_name_label')" align="left">
        <template v-slot="i">
          {{ musicSchools[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('music_school_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/music_schools/${musicSchools[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(musicSchools[i.$index].id)"/>
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
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel';

@Component
export default class MusicSchoolListView extends Vue {

  @Prop({type: [], required: true})
  musicSchools!: MusicSchoolApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(musicSchoolId: number){
    this.$api.admin.musicSchool.removeMusicSchool(musicSchoolId)
    this.$emit('delete')
  }

}
</script>
