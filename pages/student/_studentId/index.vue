<template>
  <div>
    <div style="display: flex">
      <div class='title default-top-margin' style="margin-right: auto; margin-left: auto;">
        {{$t('concerts_title')+(user != null? user.name : '')}}
      </div>
      <el-popover
        placement="bottom"
        width="200">
        <div class="title">
          {{$t('concerts_popover_title')}}
        </div>
        <el-select v-model="selectedConcert" placeholder="Select" class="default-top-margin">
          <el-option
            v-for="concert in spareConcerts"
            :key="concert.id"
            :label="concert.date"
            :value="concert.id">
          </el-option>
        </el-select>
        <div style="display: flex; justify-content: space-around;">
          <el-button type="primary" class="default-top-margin">
            {{$t('concerts_add_button')}}
          </el-button>
        </div>
        <el-button slot="reference" type="primary" style="right: 8px; top: 8px; position: absolute">
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
  concerts: ConcertApiModel[] = []
  spareConcerts: ConcertApiModel[] = []
  selectedConcert: string = ''
  showPopover = false

  async mounted(){
    try{
      this.user = await this.$api.user.getStudentConcerts(parseInt(this.$route.params.studentId))
      this.spareConcerts = await this.$api.user.getStudentAvailableConcerts(parseInt(this.$route.params.studentId))
      // console.log(this.concerts)
      // console.log(this.concerts[0].compositions)
    }catch(e){
      
    }
  }

  async onAddButtonClick(){
    this.showPopover = true;
    try{
      this.spareConcerts = await this.$api.user.getStudentAvailableConcerts(parseInt(this.$route.params.studentId))
    }catch(e){
      
    }
  }

  async onSubmitButtonClick(){
    this.showPopover = false;
    try{
      this.$api.user.setStudentConcert(parseInt(this.$route.params.studentId),parseInt(this.selectedConcert))
    }catch(e){
    }

    try{
      this.user = await this.$api.user.getStudentConcerts(parseInt(this.$route.params.studentId))
    }catch(e){
    }
  }

}
</script>
