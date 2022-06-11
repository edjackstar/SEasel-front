<template>
  <div style="padding: 14px 24px; font-family: roboto;">
    <div style="color: #00A3FF;">
      {{feedback.user.name}}
    </div>
    <div style="display: flex; color: #D8D8D8; padding-top: 4px; align-items: center; font-size: 14px;">
      <el-rate
        v-model="feedback.mark"
        disabled />
      <b>
        {{getDate(feedback.created_at)}}
      </b>
    </div>
    <div style="padding-top: 4px;">
      {{feedback.comment}}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import FeedbackApiModel from '~/model/api/FeedbackApiModel'
import {Prop} from "vue-property-decorator";
import moment from 'moment';

@Component
export default class FeedbackView extends Vue {
  @Prop({type: Object, required: true})
  feedback!: FeedbackApiModel
  
  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }
}
</script>

<style scoped>
</style>
