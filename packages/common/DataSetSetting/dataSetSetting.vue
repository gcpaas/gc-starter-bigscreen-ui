<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    title="数据集设置"
    :visible.sync="dataSetVisible"
    width="80%"
    top="10vh"
    class="data-set-wrap"
  >
    <DataSetManagement
      ref="dataSetSetting"
      :is-dialog="true"
      :ds-id="dataSetId"
      :multiple="multiple"
      :ds-value="DataDsValue"
    />
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="dataSetVisible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="sure"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import DataSetManagement from 'packages/DataSetManagement/index.js'
import 'packages/assets/style/dataSource.scss'
export default {
  name: 'DataSetSetting',
  components: { DataSetManagement },
  props: {
    config: {
      type: Object,
      default: () => {
      }
    },
    dsId: {
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
      dataSetVisible: false,
      dataSetId: null
    }
  },
  computed: {
    DataDsValue () {
      if (this.multiple) {
        return this.dsValue
      } else {
        return {
          id: this.dsId
        }
      }
    }
  },
  mounted () {
    this.dataSetId = this.dsId
  },
  methods: {
    sure () {
      this.dataSetVisible = false
      const getSelectDs = this.$refs.dataSetSetting.getSelectDs()
      if (Object.prototype.hasOwnProperty.call(getSelectDs, 'id')) {
        this.dataSetId = getSelectDs.id
      }
      this.$emit('getDsId', this.dataSetId)
      this.$emit('getSelectDs', getSelectDs)
    }
  }
}
</script>

<style lang="scss" scoped>
  .data-set-wrap{
    /deep/ .el-dialog__body{
      position: relative;
      padding: 0 !important;
      min-height: 600px;
      overflow: hidden;
    }
    /deep/ .packUpStyle{
      pointer-events: none;
      height: 600px;
    }
    /deep/ .showPackUp{
      display: none;
    }
    .app-container{
      /*height: 100% !important;*/
      min-height: 560px;
    }
    /deep/.table-box{
      height: calc(100% - 105px) !important;
      .el-table{
        height: 100% !important;
        max-height: unset!important;
      }
    }
  }

</style>
