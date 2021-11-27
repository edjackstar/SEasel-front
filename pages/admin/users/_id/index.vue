<template>
  <div>
    <div class="title default-top-margin">{{ $t('edit_user_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="user"
      size="mini"
      label-width="80px">
      <el-form-item prop="name" :label="$t('edit_user_label_name')">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item prop="email" :label="$t('edit_user_label_email')">
        <el-input v-model="user.email" />
      </el-form-item>
      <el-form-item prop="role" :label="$t('edit_user_label_name')">
        <el-select v-model="user.role">
          <el-option
            label="ADMIN"
            value="ADMIN" 
            />
          <el-option
            label="TEACHER"
            value="TEACHER" 
            />
          <el-option
            label="STUDENT"
            value="STUDENT" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="role" :label="$t('edit_user_label_name')">
        <el-select v-model="user.school">
          <el-option
            v-for="musicSchool in musicSchools"
            :key="musicSchool.id"
            :label="musicSchool.name"
            :value="musicSchool" 
            />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('edit_user_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import UserApiModel from '~/model/api/admin/UserApiModel'
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel'

@Component({
  layout: 'admin'
})
export default class StudentPage extends Vue{

  @Ref('editMusicSchoolFormRef')
  editMusicSchoolFormRef!: ElForm
  

  musicSchools: MusicSchoolApiModel[] = []
  
  user: UserApiModel = {
    name: '',
    email: '',
    role: 'TEACHER',
    musicSchool: {
      name: '',
      id: 0
    },
    id: 0
  }
  loading = false

  async mounted(){
    this.user = await this.$api.admin.user.getUser(+this.$route.query.id)
    try{
      this.musicSchools = await this.$api.admin.musicSchool.getMusicSchoolList()
    }catch(e){
      
    }
  }

  async submit() {
    const user = this.user
    if (this.loading || user ==null) return

    try {
      this.loading = true
      await this.$api.admin.user.updateUser(user)
    } catch (e) {
      this.$message({
        message: this.$t('edit_user_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = true
    }
  }
}
</script>
