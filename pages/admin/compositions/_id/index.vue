<template>
  <div>
    <div class="title default-top-margin">{{ $t('edit_composition_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="composition"
      size="mini"
      label-width="140px">
      <el-form-item prop="author" :label="$t('edit_composition_label_author')">
        <el-input v-model="composition.author" />
      </el-form-item>
      <el-form-item prop="name" :label="$t('edit_composition_label_name')">
        <el-input v-model="composition.name" />
      </el-form-item>
      <el-form-item prop="insrument" :label="$t('edit_composition_label_instrument')">
        <el-select v-model="composition.instrument.id">
          <el-option
            v-for="instrument in instruments"
            :key="instrument.id"
            :label="instrument.name"
            :value="instrument.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="difficulty" :label="$t('edit_composition_label_difficulty')">
        <el-input v-model="composition.difficulty" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('edit_composition_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import CompositionApiModel from '~/model/api/admin/CompositionApiModel'
import InstrumentApiModel from '~/model/api/admin/InstrumentApiModel'

@Component({
  layout: 'admin'
})
export default class StudentPage extends Vue{
  
  instruments: InstrumentApiModel[] = []
  
  composition: CompositionApiModel = {
    name: '',
    author: '',
    difficulty: 0,
    instrument: {
      name: '',
      id: null
    },
    id: +this.$route.params.id
  }

  loading = false

  async mounted(){
    this.composition = await this.$api.admin.composition.getComposition(+this.$route.params.id)
    try{
      this.instruments = await this.$api.admin.instrument.getInstrumentList()
    }catch(e){
      
    }
  }

  async submit() {
    const composition = this.composition
    if (this.loading || composition ==null) return

    try {
      this.loading = true
      await this.$api.admin.composition.updateComposition(composition)
      this.$router.push('/admin/compositions')
    } catch (e) {
      this.$message({
        message: this.$t('edit_composition_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
