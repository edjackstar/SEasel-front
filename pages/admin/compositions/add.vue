<template>
  <div>
    <div class="title default-top-margin">{{ $t('add_composition_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="composition"
      size="mini"
      label-width="140px">
      <el-form-item prop="author" :label="$t('add_composition_label_author')">
        <el-input v-model="composition.author" />
      </el-form-item>
      <el-form-item prop="name" :label="$t('add_composition_label_name')">
        <el-input v-model="composition.name" />
      </el-form-item>
      <el-form-item prop="insrument" :label="$t('add_composition_label_instrument')">
        <el-select v-model="composition.instrument.id">
          <el-option
            v-for="instrument in instruments"
            :key="instrument.id"
            :label="instrument.name"
            :value="instrument.id" 
            />
        </el-select>
      </el-form-item>
      <el-form-item prop="difficulty" :label="$t('add_composition_label_difficulty')">
        <el-input v-model="composition.difficulty" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('add_concert_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InstrumentApiModel from '~/model/api/admin/InstrumentApiModel'
import CompositionApiModel from '~/model/api/admin/CompositionApiModel'

@Component({
  layout: 'admin'
})
export default class StudentPage extends Vue{
  
  instruments: InstrumentApiModel[] = []
  
  composition: CompositionApiModel = {
    name: '',
    author: '',
    avg_mark: 0,
    difficulty: 0,
    instrument: {
      name: '',
      id: null
    },
    id: +this.$route.params.id
  }

  loading = false

  async mounted(){
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
      await this.$api.admin.composition.addComposition(composition)
      this.$router.push(this.localePath('/admin/composition'))
    } catch (e) {
      this.$message({
        message: this.$t('add_composition_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
