<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import Component from "vue-class-component";
import {Vue} from "vue-property-decorator";

@Component({
  middleware: 'login'
})
export default class LoginLayout extends Vue {
}
</script>

<style scoped>

</style>
