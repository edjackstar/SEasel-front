<template>
  <div>
    <el-table
      :border="false"
      :data="instruments"
      size="mini">
      <el-table-column prop="name" :label="$t('instrument_list_name_label')" align="left">
        <template v-slot="i">
          {{ instruments[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('instrument_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/instruments/${instruments[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(instruments[i.$index].id)"/>
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
import InstrumentApiModel from '~/model/api/admin/InstrumentApiModel';

@Component
export default class InstrumentListView extends Vue {

  @Prop({type: [], required: true})
  instruments!: InstrumentApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(id: number){
    this.$api.admin.instrument.removeInstrument(id)
    this.$emit('delete')
  }

}
</script>
