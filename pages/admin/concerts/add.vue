<template>
  <div>
    <div class="title default-top-margin">{{ $t('add_concert_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="concert"
      size="mini"
      label-width="140px">
      <el-form-item prop="music_school" :label="$t('add_concert_label_music_school')">
        <el-select v-model="concert.music_school.id">
          <el-option
            v-for="musicSchool in musicSchools"
            :key="musicSchool.id"
            :label="musicSchool.name"
            :value="musicSchool.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="date" :label="$t('add_concert_label_date')">
        <el-input v-model="concert.date" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('add_concert_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import ConcertApiModel from '~/model/api/admin/ConcertApiModel'
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel'

@Component({
  layout: 'admin'
})
export default class StudentPage extends Vue{

  @Ref('editMusicSchoolFormRef')
  editMusicSchoolFormRef!: ElForm

  musicSchools: MusicSchoolApiModel[] = []
  
  concert: ConcertApiModel = {
    date: '',
    music_school: {
      name: '',
      id: null
    },
    id: +this.$route.params.id
  }

  loading = false

  async mounted(){
    try{
      this.musicSchools = await this.$api.admin.musicSchool.getMusicSchoolList()
    }catch(e){
      
    }
  }

  async submit() {
    const concert = this.concert
    if (this.loading || concert ==null) return

    try {
      this.loading = true
      await this.$api.admin.concert.addConcert(concert)
      this.$router.push('/admin/concerts')
    } catch (e) {
      this.$message({
        message: this.$t('add_concert_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
