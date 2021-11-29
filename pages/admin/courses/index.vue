<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('course_list_title')}}
    </div>
    <course-list-view :courses="courses" class="default-top-margin"/>
    <div class="default-top-margin default-right-margin" style="display: flex; justify-content: flex-end;">
      <el-button type="primary" @click="$router.push('/admin/courses/add')" >
        {{$t('course_list_add_btn')}}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CourseListView from '~/components/admin/CourseListView.vue'
import CourseApiModel from '~/model/api/admin/CourseApiModel'

@Component({
  layout: 'admin',
  components: {
    CourseListView
  }
})
export default class ConcertPage extends Vue{

  courses: CourseApiModel[] = []

  async mounted(){
    try{
      this.courses = await this.$api.admin.course.getCourseList()
    }catch(e){
      
    }
  }
}
</script>
