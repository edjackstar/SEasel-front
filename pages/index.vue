<template>
  <div>
    <div class='title default-top-margin'>
      {{$t('students_title')}}
    </div>
    <student-list-view :students="students" class="default-top-margin"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import StudentListView from '~/components/StudentListView.vue'
import StudentApiModel from '~/model/api/StudentApiModel'
import UserApi from '~/api/UserApi'

@Component({
  layout: 'default',
  components: {
    StudentListView
  }
})
export default class HomePage extends Vue{

  students: StudentApiModel[] = []

  async mounted(){
    // console.log((await this.$axios.get('/api/teacher/students/')).data)
    try{
      this.students = await this.$api.user.getStudents()
    }catch(e){
      
    }
  }

}
</script>
