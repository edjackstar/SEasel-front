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

@Component({
  layout: 'default',
  components: {
    StudentListView
  }
})
export default class HomePage extends Vue{

  students: StudentApiModel[] = []

  async mounted(){
    try{
      this.students = await this.$api.user.getStudents()
    }catch(e){
      
    }
  }

}
</script>
