<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('music_school_list_title')}}
    </div>
    <music-school-list-view :musicSchools="musicSchools" class="default-top-margin"/>
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push('/admin/music_schools/add')" >
        {{$t('music_school_list_add_btn')}}
      </el-button>
    </div>
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
export default class MusicSchoolPage extends Vue{

  musicSchools: MusicSchoolApiModel[] = []

  async mounted(){
    try{
      this.musicSchools = await this.$api.admin.musicSchool.getMusicSchoolList()
    }catch(e){
      
    }
  }
}
</script>
