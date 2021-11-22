<template>
  
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user = namespace('user')

@Component({
  layout: 'default'
})
export default class HomePage extends Vue{

  @user.Mutation
  public setAccessToken!: (data: string | null) => void

  @user.Mutation
  public setRefreshToken!: (data: string | null) => void
  
  @user.Getter
  public getAccessToken!: string

  mounted(){
    console.log(this.getAccessToken)
  }

}
</script>
