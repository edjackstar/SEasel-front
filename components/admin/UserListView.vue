<template>
  <div>
    <el-table
      :border="false"
      :data="users"
      size="mini">
      <el-table-column prop="name" :label="$t('user_list_name_label')" align="center">
        <template v-slot="i">
          {{ users[i.$index].name }}
        </template>
      </el-table-column>
      <el-table-column prop="email" :label="$t('user_list_email_label')" align="center">
        <template v-slot="i">
          {{ users[i.$index].email }}
        </template>
      </el-table-column>
      <el-table-column prop="role" :label="$t('user_list_role_label')" align="center">
        <template v-slot="i">
          {{ users[i.$index].role }}
        </template>
      </el-table-column>
      <el-table-column prop="musicSchool" :label="$t('user_list_music_school_label')" align="center">
        <template v-slot="i">
          {{ users[i.$index].musicSchool.name }}
        </template>
      </el-table-column>
      <el-table-column prop="action" :label="$t('user_list_action_label')" align="right" width="120px">
        <template v-slot="i">
          <nuxt-link :to="localePath(`/admin/users/${users[i.$index].id}`)" >
            <el-button size="mini" icon="el-icon-edit"/>
          </nuxt-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="onRemoveClick(users[i.$index].id)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import moment from 'moment';
import {Prop, Watch} from "vue-property-decorator";
import UserApiModel from '~/model/api/admin/UserApiModel';

@Component
export default class UserListView extends Vue {

  @Prop({type: [], required: true})
  users!: UserApiModel[]

  getDate(date: string): string{
    return moment(date).format('DD.MM.yyyy HH:MM')
  }

  onRemoveClick(userId: number){
    this.$api.admin.user.removeUser(userId)
  }

}
</script>
