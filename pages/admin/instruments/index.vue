<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('instrument_list_title')}}
    </div>
    <instrument-list-view :instruments="instruments" class="default-top-margin" @delete="updateInstruments" />
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push(localePath('/admin/instruments/add'))" >
        {{$t('instrument_list_add_btn')}}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InstrumentListView from '~/components/admin/InstrumentListView.vue'
import InstrumentApiModel from '~/model/api/admin/InstrumentApiModel'

@Component({
  layout: 'admin',
  components: {
    InstrumentListView
  }
})
export default class InstrumentPage extends Vue{

  instruments: InstrumentApiModel[] = []

  async mounted(){
    this.updateInstruments()
  }

  async updateInstruments(){
    try{
      this.instruments = await this.$api.admin.instrument.getInstrumentList()
    }catch(e){
      
    }
  }
}
</script>
