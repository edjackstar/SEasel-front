<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('user_list_title')}}
    </div>
    <user-list-view :users="users" class="default-top-margin"/>
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push('/admin/users/add')" >
        {{$t('user_list_add_btn')}}
      </el-button>
    </div>
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
export default class UserPage extends Vue{

  users: UserApiModel[] = []

  async mounted(){
    try{
      this.users = await this.$api.admin.user.getUserList()
    }catch(e){
      
    }
  }
}
</script>
