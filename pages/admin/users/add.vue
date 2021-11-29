<template>
  <div>
    <div class="title default-top-margin">{{ $t('add_user_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="user"
      size="mini"
      label-width="140px">
      <el-form-item prop="name" :label="$t('add_user_label_name')">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item prop="email" :label="$t('add_user_label_email')">
        <el-input v-model="user.email" />
      </el-form-item>
      <el-form-item prop="password" :label="$t('add_user_label_password')">
        <el-input v-model="password" show-password/>
      </el-form-item>
      <el-form-item prop="password" :label="$t('add_user_label_password2')">
        <el-input v-model="password2" show-password/>
      </el-form-item>
      <el-form-item prop="role" :label="$t('add_user_label_role')">
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
      <el-form-item prop="role" :label="$t('add_user_label_music_school')">
        <el-select v-model="user.music_school.id">
          <el-option
            v-for="musicSchool in musicSchools"
            :key="musicSchool.id"
            :label="musicSchool.name"
            :value="musicSchool.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('add_user_btn_submit') }}
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
export default class AddUserPage extends Vue{

  @Ref('editMusicSchoolFormRef')
  editMusicSchoolFormRef!: ElForm

  musicSchools: MusicSchoolApiModel[] = []
  
  user: UserApiModel = {
    name: '',
    email: '',
    role: 'TEACHER',
    music_school: {
      name: '',
      id: null
    },
    id: 0
  }

  password: string = ''
  password2: string = ''

  loading = false

  async mounted(){
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
      await this.$api.admin.user.addUser(user, this.password, this.password2)
      this.$router.push('/admin/users')
    } catch (e) {
      this.$message({
        message: this.$t('add_user_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
