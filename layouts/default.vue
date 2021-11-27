<template>
  <div>
    <nuxt style="min-height: calc(100vh - 68px);" />
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
  middleware: 'pages'
})
export default class DefaultLayout extends Vue {
}
</script>

<style scoped>

</style>
