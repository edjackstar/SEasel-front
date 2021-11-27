<template>
  <div>
    <div class='title default-top-margin'>
      {{`${$t('repetitions_title')}`}}
    </div>
    <div class='title'>
      {{`${(user != null? user.name : '')}`}}
    </div>
    <div class='title'>
      {{`${(composition != null? composition.author+' - '+composition.name : '')} `}}
    </div>
    <repetition-list-view :repetitions="repetitions" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RepetitionListView from '~/components/RepetitionListView.vue'
import CompositionApiModel from '~/model/api/CompositionApiModel'
import RepetitionApiModel from '~/model/api/RepetitionApiModel'
import UserApiModel from '~/model/api/UserApiModel'

@Component({
  layout: 'default',
  components: {
    RepetitionListView
  }
})
export default class StudentPage extends Vue{

  user: UserApiModel | null = null
  repetitions: RepetitionApiModel[] = []
  composition: CompositionApiModel | null = null

  async mounted(){
    try{
      this.repetitions = await this.$api.user.getStudentCompositionRepetitions(parseInt(this.$route.params.studentId),parseInt(this.$route.params.compositionId))
      this.user = await this.$api.user.getStudentConcerts(parseInt(this.$route.params.studentId))
      this.composition = await this.$api.user.getComposition(parseInt(this.$route.params.compositionId))
    }catch(e){
      
    }
  }
}
</script>
