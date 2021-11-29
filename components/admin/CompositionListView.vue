<template>
  <div>
    <el-table
      :border="false"
      :data="compositions"
      size="mini">
      <el-table-column prop="author" :label="$t('composition_list_author_label')" align="left">
        <template v-slot="i">
          {{ compositions[i.$index].author }}
        </template>
      </el-table-column>
      <el-table-column prop="name" :label="$t('composition_list_name_label')" align="center">
        <template v-slot="i">
          {{ compositions[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="instrument" :label="$t('composition_list_instrument_label')" align="center">
        <template v-slot="i">
          {{ compositions[i.$index].instrument.name }}
        </template>
      </el-table-column>
      <el-table-column prop="difficulty" :label="$t('composition_list_difficulty_label')" align="center">
        <template v-slot="i">
          {{ compositions[i.$index].difficulty }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('composition_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/compositions/${compositions[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(compositions[i.$index].id)"/>
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
import CompositionApiModel from '~/model/api/admin/CompositionApiModel';

@Component
export default class SemesterListView extends Vue {

  @Prop({type: [], required: true})
  compositions!: CompositionApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(id: number){
    this.$api.admin.composition.removeComposition(id)
  }

}
</script>
