<template>
  <div>
    <div class="title default-top-margin">{{ $t('edit_instrument_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="musicSchool"
      size="mini"
      label-width="140px">
      <el-form-item prop="name" :label="$t('edit_instrument_label_name')">
        <el-input v-model="instrument.name" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('edit_instrument_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import InstrumentApiModel from '~/model/api/admin/InstrumentApiModel'

@Component({
  layout: 'admin'
})
export default class EditMusicSchoolPage extends Vue{

  @Ref('editMusicSchoolFormRef')
  editMusicSchoolFormRef!: ElForm
  
  instrument:InstrumentApiModel = {
    name: '',
    id: +this.$route.params.id
  }
  
  loading = false

  async mounted(){
    this.instrument = await this.$api.admin.instrument.getInstrument(+this.$route.params.id)
  }

  async submit() {
    const instrument = this.instrument
    if (this.loading || instrument ==null) return

    try {
      this.loading = true
      await this.$api.admin.instrument.updateInstrument(instrument)
      this.$router.push('/admin/instruments')
    } catch (e) {
      this.$message({
        message: this.$t('edit_instrument_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
