<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    title="数据集设置"
    :visible.sync="dataSetVisible"
    width="80%"
    top="10vh"
    class="bs-dialog-wrap data-set-wrap bs-el-dialog"
  >
    <DataSetManagement
      ref="dataSetSetting"
      class="bs-data-set-management"
      theme-class="bs-"
      :is-border="true"
      :is-dialog="true"
      :ds-id="dataSetId"
      :multiple="multiple"
      :ds-value="DataDsValue"
    />
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        class="bs-el-button-default"
        @click="dataSetVisible = false"
      >
        取消
      </el-button>
      <el-button
        type="primary"
        @click="sure"
      >确定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import DataSetManagement from 'packages/DataSetManagement'
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

<style lang="scss">
</style>

<style lang="scss" scoped>
@import '~packages/assets/style/bsTheme.scss';
::v-deep .el-scrollbar{
    height: 490px !important;
    overflow-y: auto !important;
  }
.data-set-wrap {
  /deep/ .el-dialog__body {
    position: relative;
    padding: 0 !important;
    min-height: 600px;
    overflow: hidden;
  }

 ::v-deep .bs-container {
    padding: 0;
    min-height: 590px;
    .ztree {
      max-height: none !important;
    }
  }

  /deep/.bs-table {
    height: calc(100% - 105px) !important;

    .el-table {
      height: 100% !important;
      max-height: unset !important;
    }
  }
}
</style>
