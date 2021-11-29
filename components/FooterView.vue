<template>
  <div>
    <div class="footer">
      <el-button type="text" @click="logout" style="margin-left: 24px;">
        {{$t('logout')}}
      </el-button>
      <div class="locales">
        <nuxt-link :to="switchLocalePath('en')">
          <el-link v-if="isLocaleBool('en')" style="margin-right: 4px;" type="primary">
            <b>
              en
            </b>
          </el-link>
          <el-link v-else style="margin-right: 4px;" type="primary">
            en
          </el-link>
        </nuxt-link>
        |
        <nuxt-link :to="switchLocalePath('uk')">
          <el-link v-if="isLocaleBool('uk')" style="margin-left: 4px; margin-right: 4px;" type="primary">
            <b>
              uk
            </b>
          </el-link>
          <el-link v-else style="margin-left: 4px; margin-right: 4px;" type="primary">
            uk
          </el-link>
        </nuxt-link>
        |
        <nuxt-link :to="switchLocalePath('ru')">
          <el-link v-if="isLocaleBool('ru')" style="margin-left: 4px;" type="primary">
            <b>
              ru
            </b>
          </el-link>
          <el-link v-else style="margin-left: 4px;" type="primary">
            ru
          </el-link>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user = namespace('user')

@Component
export default class FooterView extends Vue {
  @user.Mutation
  public setAccessToken!: (data: string | null) => void

  @user.Mutation
  public setRefreshToken!: (data: string | null) => void

  logout(){
    this.setAccessToken(null)
    this.setRefreshToken(null)
    this.$router.replace(this.localePath("/login"))
  }

  isLocaleBool (locale:string):boolean {
    return this.$i18n.locale === locale
  }
}
</script>

<style scoped>
.footer{
    display: flex;
    align-items: center;
    min-height: 50px;
    border-top: solid 1px #e6e6e6;
}
.locales{
    display: flex;
    width: 100%;
    justify-content: center;
}
</style>
