<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('user_list_title')}}
    </div>
    <user-list-view :users="users" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import UserListView from '~/components/admin/UserListView.vue'
import UserApiModel from '~/model/api/admin/UserApiModel'

@Component({
  layout: 'admin',
  components: {
    UserListView
  }
})
export default class StudentPage extends Vue{

  users: UserApiModel[] = []

  async mounted(){
    try{
      this.users = await this.$api.admin.user.getUserList()
    }catch(e){
      
    }
  }
}
</script>
