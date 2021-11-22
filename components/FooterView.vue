<template>
  <div class="footer">
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
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class FooterView extends Vue {
  isLocaleBool (locale:string):boolean {
    return this.$i18n.locale === locale
  }
}
</script>

<style scoped>
.footer{
    min-height: 50px;
    border-top: solid 1px #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
