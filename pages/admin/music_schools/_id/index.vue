<template>
  <div>
    <div class="title default-top-margin">{{ $t('edit_music_school_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="musicSchool"
      size="mini"
      label-width="140px">
      <el-form-item prop="name" :label="$t('edit_music_school_label_name')">
        <el-input v-model="musicSchool.name" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('edit_music_school_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel'

@Component({
  layout: 'admin'
})
export default class EditMusicSchoolPage extends Vue{

  @Ref('editMusicSchoolFormRef')
  editMusicSchoolFormRef!: ElForm
  
  musicSchool:MusicSchoolApiModel = {
    name: '',
    id: +this.$route.params.id
  }
  
  loading = false

  async mounted(){
    this.musicSchool = await this.$api.admin.musicSchool.getMusicSchool(+this.$route.params.id)
  }

  async submit() {
    const musicSchool = this.musicSchool
    if (this.loading || musicSchool ==null) return

    try {
      this.loading = true
      await this.$api.admin.musicSchool.updateMusicSchool(musicSchool)
      this.$router.push('/admin/music_schools')
    } catch (e) {
      this.$message({
        message: this.$t('edit_music_school_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
