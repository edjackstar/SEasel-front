<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('composition_list_title')}}
    </div>
    <composition-list-view :compositions="compositions" class="default-top-margin"/>
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push('/admin/compositions/add')" >
        {{$t('composition_list_add_btn')}}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CompositionListView from '~/components/admin/CompositionListView.vue'
import CompositionApiModel from '~/model/api/admin/CompositionApiModel'

@Component({
  layout: 'admin',
  components: {
    CompositionListView
  }
})
export default class ConcertPage extends Vue{

  compositions: CompositionApiModel[] = []

  async mounted(){
    try{
      this.compositions = await this.$api.admin.composition.getCompositionList()
    }catch(e){
      
    }
  }
}
</script>
