<template>
  <div>
    <div style="display: flex">
      <div class='title default-top-margin' style="margin-right: auto; margin-left: auto;">
        {{$t('concerts_title')+(user != null? user.name : '')}}
      </div>
      <el-popover
        placement="bottom"
        v-model="showPopover"
        width="200">
        <div class="title">
          {{$t('concerts_popover_title')}}
        </div>
        <el-select v-model="selectedConcert" placeholder="Select" class="default-top-margin">
          <el-option
            v-for="concert in spareConcerts"
            :key="concert.concertId"
            :label="concert.date"
            :value="concert.concertId">
          </el-option>
        </el-select>
        <div style="display: flex; justify-content: space-around;">
          <el-button type="primary" class="default-top-margin" @click="onSubmitButtonClick" :disabled="selectedConcert==null">
            {{$t('concerts_add_button')}}
          </el-button>
        </div>
        <el-button slot="reference" type="primary" style="right: 8px; top: 8px; position: absolute" @click="onAddButtonClick">
          {{$t('concerts_add_button')}}
        </el-button>
      </el-popover>
    </div>
    <concert-list-view v-if="user!=null" :concerts="user.concerts" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ConcertListView from '~/components/ConcertListView.vue'
import ConcertApiModel from '~/model/api/ConcertApiModel'
import UserApiModel from '~/model/api/UserApiModel'

@Component({
  layout: 'default',
  components: {
    ConcertListView
  }
})
export default class StudentPage extends Vue{

  user: UserApiModel | null = null
  spareConcerts: ConcertApiModel[] = []
  selectedConcert: number | null = null
  showPopover = false

  async mounted(){
    try{
      this.user = await this.$api.user.getStudentConcerts(parseInt(this.$route.params.studentId))
      console.log(this.user.concerts)
      this.spareConcerts = await this.$api.user.getStudentAvailableConcerts(parseInt(this.$route.params.studentId))
      
      // console.log(this.concerts[0].compositions)
    }catch(e){
      
    }
  }

  async onAddButtonClick(){
    // this.showPopover = true;
    try{
      this.spareConcerts = await this.$api.user.getStudentAvailableConcerts(parseInt(this.$route.params.studentId))
      console.log(this.spareConcerts)
    }catch(e){
      
    }
  }

  async onSubmitButtonClick(){
    this.showPopover = false;
    if(this.selectedConcert === null)
      return
    console.log(this.selectedConcert)
    try{
      this.$api.user.setStudentConcert(parseInt(this.$route.params.studentId),this.selectedConcert)
    }catch(e){
    }

    try{
      this.user = await this.$api.user.getStudentConcerts(parseInt(this.$route.params.studentId))
    }catch(e){
    }
  }

}
</script>
