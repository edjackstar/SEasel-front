<template>
  <div>
    <feedback-view v-for="feedback in feedbacks" :key="feedback.id" :feedback="feedback" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import FeedbackApiModel from '~/model/api/FeedbackApiModel';
import FeedbackView from './FeedbackView.vue'

@Component({
  components: {
    FeedbackView
  }
  })
export default class FeedbackListView extends Vue {

  @Prop({type: [], required: true})
  feedbacks!: FeedbackApiModel[]

}
</script>
