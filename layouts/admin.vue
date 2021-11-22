<template>
  <div>
    <el-menu
      mode = "vertical"
      class="el-menu-vertical-demo">
      <el-menu-item :index="localePath('/')">{{ $t('menu_home') }}</el-menu-item>
    </el-menu>
    <nuxt style="min-height: calc(100vh - 60px);" />
    <footer-view />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import {Vue, Watch} from "vue-property-decorator";
import {mapState} from "vuex";
import FooterView from "~/components/FooterView.vue"

@Component({
  computed: mapState('auth', ['user']),
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
