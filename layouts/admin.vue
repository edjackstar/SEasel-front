<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu mode = "vertical" router :default-active="localePath($router.currentRoute.path)">
          <el-menu-item :index="localePath('/admin/music_schools')">{{ $t('menu_music_schools') }}</el-menu-item>
          <el-menu-item :index="localePath('/admin/users')">{{ $t('menu_users') }}</el-menu-item>
          <el-menu-item :index="localePath('/admin/concerts')">{{ $t('menu_concerts') }}</el-menu-item>
          <el-menu-item :index="localePath('/admin/semesters')">{{ $t('menu_semesters') }}</el-menu-item>
          <el-menu-item :index="localePath('/admin/instruments')">{{ $t('menu_instruments') }}</el-menu-item>
          <el-menu-item :index="localePath('/admin/compositions')">{{ $t('menu_compositions') }}</el-menu-item>
          <el-menu-item :index="localePath('/admin/courses')">{{ $t('menu_courses') }}</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container style="">
        <nuxt style="min-height: calc(100vh - 54px); width: 100%" />
      </el-container>
    </el-container>
    <footer-view />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import {Vue, Watch} from "vue-property-decorator";
import {mapState} from "vuex";
import FooterView from "~/components/FooterView.vue"

@Component({
  components: {
    FooterView
  },
  middleware: 'admin'
})
export default class DefaultLayout extends Vue {
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
