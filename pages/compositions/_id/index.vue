<template>
  <div>
    <div class='title default-top-margin'>
      {{composition != null? (composition.author + ' - ' + composition.name): ''}}
    </div>
    <div class='title default-top-margin'>
      {{$t('feedbacks_title')}}
    </div>
    <feedback-list-view :feedbacks="feedbacks" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FeedbackListView from '~/components/FeedbackListView.vue'
import CompositionApiModel from '~/model/api/CompositionApiModel'
import FeedbackApiModel from '~/model/api/FeedbackApiModel'

@Component({
  layout: 'default',
  components: {
    FeedbackListView
  }
})
export default class HomePage extends Vue{

  feedbacks: FeedbackApiModel[] = []
  composition: CompositionApiModel | null = null

  async mounted(){

    try{
      this.composition = await this.$api.user.getComposition(parseInt(this.$route.params.id))
      this.feedbacks = await this.$api.user.getCompositionComments(parseInt(this.$route.params.id))
    }catch(e){
      
    }
  }

}
</script>
