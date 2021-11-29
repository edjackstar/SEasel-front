<template>
  <div>
    <div class="title default-top-margin">{{ $t('add_semester_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="semester"
      size="mini"
      label-width="140px">
      <el-form-item prop="music_school" :label="$t('add_semester_label_music_school')">
        <el-select v-model="semester.music_school.id">
          <el-option
            v-for="musicSchool in musicSchools"
            :key="musicSchool.id"
            :label="musicSchool.name"
            :value="musicSchool.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="number" :label="$t('add_semester_label_number')">
        <el-input v-model="semester.number" />
      </el-form-item>
      <el-form-item prop="count" :label="$t('add_semester_label_composition_count')">
        <el-input v-model="semester.composition_count" />
      </el-form-item>
      <el-form-item prop="min_difficulty" :label="$t('add_semester_label_min_difficulty')">
        <el-input v-model="semester.min_difficulty" />
      </el-form-item>
      <el-form-item prop="max_difficulty" :label="$t('add_semester_label_max_difficulty')">
        <el-input v-model="semester.max_difficulty" />
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
import SemesterApiModel from '~/model/api/admin/SemesterApiModel'
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel'

@Component({
  layout: 'admin'
})
export default class StudentPage extends Vue{

  @Ref('editMusicSchoolFormRef')
  editMusicSchoolFormRef!: ElForm

  musicSchools: MusicSchoolApiModel[] = []
  
  semester: SemesterApiModel = {
    min_difficulty: 0,
    max_difficulty: 0,
    number: 0,
    composition_count: 0,
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
    const semester = this.semester
    if (this.loading || semester ==null) return

    try {
      this.loading = true
      await this.$api.admin.semester.addSemester(semester)
      this.$router.push('/admin/semester')
    } catch (e) {
      this.$message({
        message: this.$t('add_semester_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
