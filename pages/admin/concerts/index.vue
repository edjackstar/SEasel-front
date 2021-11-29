<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('concert_list_title')}}
    </div>
    <concert-list-view :concerts="concerts" class="default-top-margin"/>
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push('/admin/concerts/add')" >
        {{$t('concert_list_add_btn')}}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ConcertListView from '~/components/admin/ConcertListView.vue'
import ConcertApiModel from '~/model/api/admin/ConcertApiModel'

@Component({
  layout: 'admin',
  components: {
    ConcertListView
  }
})
export default class ConcertPage extends Vue{

  concerts: ConcertApiModel[] = []

  async mounted(){
    try{
      this.concerts = await this.$api.admin.concert.getConcertList()
    }catch(e){
      
    }
  }
}
</script>
