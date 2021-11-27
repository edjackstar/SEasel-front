<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('music_school_list_title')}}
    </div>
    <music-school-list-view :musicSchools="musicSchools" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MusicSchoolListView from '~/components/admin/MusicSchoolListView.vue'
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel'

@Component({
  layout: 'admin',
  components: {
    MusicSchoolListView
  }
})
export default class StudentPage extends Vue{

  musicSchools: MusicSchoolApiModel[] = []

  async mounted(){
    try{
      this.musicSchools = await this.$api.admin.musicSchool.getMusicSchoolList()
    }catch(e){
      
    }
  }
}
</script>
