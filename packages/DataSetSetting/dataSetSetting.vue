<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    title="数据集设置"
    :visible.sync="dataSetVisible"
    width="80%"
    custom-class="bs-theme-dialog"
    top="10vh"
    class="bs-dialog-wrap data-set-wrap"
  >
    <DataSetManagement
      ref="dataSetSetting"
      class="bs-data-set-management"
      dark-class="bs-theme"
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
      <el-button @click="dataSetVisible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="sure"
      >确 定</el-button>
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
.bs-data-set-management {
  .ztree {
    span {
      color: $bs-theme-text;
    }

    li:hover {
      background: transparent !important;
      background-color: transparent !important;
    }

    .curSelectedNode {
      background: $bs-theme-hover !important;
      background-color: $bs-theme-hover !important;
    }

    a:hover {
      background: $bs-theme-hover !important;
      background-color: $bs-theme-hover !important;
    }
  }

}
</style>

<style lang="scss" scoped>
.bs-data-set-management {
  ::v-deep .inner-container {
    background: $bs-theme-bg;
  }

  ::v-deep .packUpStyle {
    pointer-events: none;
    position: static;
    height: 100%;
    background-color: $bs-theme-bg;
  }

  ::v-deep .ztreeNodeMenu {
    ul {
      background-color: $bs-theme-bg;
    }

    li:hover {
      background-color: $bs-theme-hover;
    }

    span {
      color: $bs-theme-title;
    }

    .triangle {
      background-color: $bs-theme-bg !important;
    }
  }

  ::v-deep .el-input__inner {
    color: $bs-theme-text;
    background: $bs-theme-component;
  }
  ::v-deep .left-tab-box {
    span {
      color: $bs-theme-text;
    }
  }
  ::v-deep .left-tab-box ul li.tab-active {
    background-color: $bs-theme-hover;
  }
  ::v-deep .left-tab-box ul li:hover {
    background-color: $bs-theme-hover;
  }
}

.data-set-wrap {
  /deep/ .el-dialog__body {
    /*position: relative;*/
    /*padding: 0 !important;*/
    /*min-height: 600px;*/
    /*overflow: hidden;*/
  }

  /deep/ .showPackUp {
    display: none;
  }

  .bs-container {
    /*min-height: 590px;*/
  }

  /*.bs-table-box{*/
  /*  height: calc(100% - 105px) !important;*/

  /*  .el-table {*/
  /*    !*height: 100% !important;*!*/
  /*    !*max-height: unset !important;*!*/
  /*    height: calc(90vh - 340px)!important;*/
  /*  }*/
  /*}*/
}
</style>
