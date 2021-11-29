<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('semester_list_title')}}
    </div>
    <semester-list-view :semesters="semesters" class="default-top-margin" @delete="updateSemesters" />
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push(localePath('/admin/semesters/add'))" >
        {{$t('semester_list_add_btn')}}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SemesterListView from '~/components/admin/SemesterListView.vue'
import SemesterApiModel from '~/model/api/admin/SemesterApiModel'

@Component({
  layout: 'admin',
  components: {
    SemesterListView
  }
})
export default class ConcertPage extends Vue{

  semesters: SemesterApiModel[] = []

  async mounted(){
    this.updateSemesters()
  }

  async updateSemesters(){
    try{
      this.semesters = await this.$api.admin.semester.getSemesterList()
    }catch(e){
      
    }
  }
}
</script>
