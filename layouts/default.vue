<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu mode = "vertical" router :default-active="localePath($router.currentRoute.path)">
          <el-menu-item :index="localePath('/students')">{{ $t('menu_students') }}</el-menu-item>
          <el-menu-item :index="localePath('/compositions')">{{ $t('menu_compositions') }}</el-menu-item>
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
import FooterView from "~/components/FooterView.vue"

@Component({
  components: {
    FooterView
  },
  middleware: 'pages'
})
export default class DefaultLayout extends Vue {
}
</script>

<style scoped>

</style>
