<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('compositions_title')}}
    </div>
    <composition-list-view :compositions="compositions" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CompositionListView from '~/components/CompositionListView.vue'
import CompositionApiModel from '~/model/api/CompositionApiModel'

@Component({
  layout: 'default',
  components: {
    CompositionListView
  }
})
export default class HomePage extends Vue{

  compositions: CompositionApiModel[] = []

  async mounted(){
    // console.log((await this.$axios.get('/api/teacher/students/')).data)
    try{
      this.compositions = await this.$api.user.getCompositionList()
    }catch(e){
      
    }
  }

}
</script>
