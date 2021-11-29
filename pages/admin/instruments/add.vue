<template>
  <div>
    <div class="title default-top-margin">{{ $t('add_instrument_title') }}</div>
    <el-form
      class="default-top-margin default-form-width default-left-margin"
      :model="instrument"
      size="mini"
      label-width="140px">
      <el-form-item prop="name" :label="$t('add_instrument_label_name')">
        <el-input v-model="instrument.name" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submit">
          {{ $t('add_instrument_btn_submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import MusicSchoolApiModel from '~/model/api/admin/MusicSchoolApiModel'

@Component({
  layout: 'admin'
})
export default class AddMusicSchoolPage extends Vue{
  
  instrument:MusicSchoolApiModel = {
    name: '',
    id: 0
  }

  loading = false

  async submit() {
    const instrument = this.instrument
    if (this.loading || instrument ==null) return

    try {
      this.loading = true
      await this.$api.admin.instrument.addInstrument(instrument)
      this.$router.push(this.localePath('/admin/instruments'))
    } catch (e) {
      this.$message({
        message: this.$t('add_instrument_error').toString(),
        type: 'error'
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
