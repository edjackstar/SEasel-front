<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh">
      <el-form
        ref="loginFormRef"
        size="mini"
        style="width: 200px"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <el-form-item :label="$t('login_label_name')" prop="email">
          <el-input v-model="loginForm.email" auto-complete name="eamil" @keyup.enter.native="onKeyUp"/>
        </el-form-item>
        <el-form-item :label="$t('login_label_pass')" prop="password">
          <el-input v-model="loginForm.password" type="password" name="password" @keyup.enter.native="onKeyUp"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loginLoading" @click="submit" style="width: 100%">
            {{ $t('login_submit') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import LoginForm from "~/model/form/LoginForm";
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import api from "~/api/AuthApi"
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user = namespace('user')

@Component({
  layout: 'login',
})
export default class LoginPage extends Vue {
  @Ref('loginFormRef')
  loginFormRef!: ElForm

  @user.Mutation
  public setAccessToken!: (data: string | null) => void

  @user.Mutation
  public setRefreshToken!: (data: string | null) => void

  @user.Getter
  public getTokenData!: object

  @user.Getter
  public getRefreshToken!: string

  loginForm: LoginForm = new LoginForm()
  loginFormRules = {  }

  loginLoading = false
  mounted(){
    console.log(this.getRefreshToken)
  }

  async onKeyUp (e: KeyboardEvent) {
    if (e.key === 'Enter') {
      await this.submit()
      return
    }
    if (e.keyCode !== 13) {
      await this.submit()
    }
  }

  async submit() {
    const valid = await this.loginFormRef.validate()
    if (!valid) return
    if (this.loginLoading) return
    try {
      this.loginLoading = true
      let auth = await api.login("loh@log.com", '123123123asd')
      console.log(auth)
      
      this.setAccessToken(auth.access)
      this.setRefreshToken(auth.refresh)
      console.log(this.getTokenData)
    } catch (e) {
      this.$message({
        message: this.$t('login_error').toString(),
        type: 'error'
      })
    } finally {
      this.loginLoading = false
    }
  }
}
</script>

<style scoped>

</style>
