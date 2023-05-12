<template>
  <div>
    <el-input
      v-model="datasetNameStr"
      placeholder="请选择数据集"
      readonly
      @focus="openDataSetDialog"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="openDataSetDialog"
      />
    </el-input>
    <data-set-dialog
      ref="dataSetDialog"
      v-bind="$attrs"
      :multiple="multiple"
      :ds-value="dsValue"
      @getDsId="getDsId"
      @getSelectDs="getSelectDs"
    />
  </div>
</template>

<script>
import dataSetDialog from './dataSetSetting'
export default {
  name: 'Index',
  components: { dataSetDialog },
  props: {
    config: {
      type: Object,
      default: () => {
      }
    },
    datasetName: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    dsValue: {
      type: [Array, Object],
      default: () => ([])
    }
  },
  data () {
    return {
    }
  },
  computed: {
    datasetNameStr () {
      return this.datasetName || this.dsValue?.map(ds => ds.name).join(',')
    }
  },
  methods: {
    openDataSetDialog () {
      this.$refs.dataSetDialog.dataSetVisible = true
    },
    getDsId (dsId) {
      this.$emit('getDsId', dsId)
    },
    getSelectDs (selectDs) {
      this.$emit('getSelectDs', selectDs)
    }
  }
}
</script>

<style scoped>

</style>
