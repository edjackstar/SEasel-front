<template>
  <div>
    <el-table
      v-if="compositions!=null"
      :data="compositions"
      @row-click="selectComposition"
      size="mini">
      <el-table-column prop="name" :label="$t('compositions_list_name_label')" align="right">
        <template v-slot="i">
          {{ compositions[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="author" :label="$t('compositions_list_author_label')" align="center">
        <template v-slot="i">
          {{ compositions[i.$index].author }}
        </template>
      </el-table-column>
      <el-table-column prop="mark" :label="$t('compositions_list_average_mark_label')" align="left">
        <template v-slot="i">
          {{ parseFloat(compositions[i.$index].avg_mark).toFixed(2) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import CompositionApiModel from '~/model/api/admin/CompositionApiModel';

@Component
export default class CompositionListView extends Vue {

  @Prop({type: [], required: true})
  compositions!: CompositionApiModel[]

  selectComposition(row: any, _column: number, _event: any){
    
    console.log(row)
    this.$router.push(this.localePath(`/compositions/${row.id}`))
  }

}
</script>
