<!--
 * @description: 设置联动的弹窗
 * @Date: 2023-01-04 14:57:06
 * @Author: xing.heng
 * @LastEditors: wujian
 * @LastEditTime: 2023-05-18 16:15:24
-->
<template>
  <el-dialog
    title="组件联动设置"
    :visible.sync="settingVisible"
    :close-on-click-modal="false"
    :before-close="handleClose"
    width="800px"
    custom-class="bs-dialog"
    append-to-body
  >
    <el-form
      ref="form"
      label-width="100px"
    >
      <el-table
        :data="configMapConfig.maps"
        class="bs-table"
        border
      >
        <el-table-column
          label="当前组件映射参数"
          align="center"
        >
          <template #default="scope">
            <el-select
              v-model="configMapConfig.maps[scope.$index].sourceField"
              popper-class="bs-select"
            >
              <el-option
                v-for="sourceField in sourceFieldList"
                :key="sourceField.value"
                :label="sourceField.label"
                :value="sourceField.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="操作符"
          align="center"
        >
          <template #default="scope">
            <el-select
              v-model="configMapConfig.maps[scope.$index].queryRule"
              popper-class="bs-select"
            >
              <el-option
                v-for="operator in operatorList"
                :key="operator.value"
                :label="operator.label"
                :value="operator.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="目标组件接收参数"
          align="center"
        >
          <template #default="scope">
            <el-select
              v-model="configMapConfig.maps[scope.$index].targetField"
              popper-class="bs-select"
            >
              <el-option
                v-for="targetField in targetFieldList"
                :key="targetField.value"
                :label="targetField.label"
                :value="targetField.value"
                :disabled="choosedTargetFields.includes(targetField.value)"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="100px"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleDelete(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-button
      v-block
      type="primary"
      @click="addRelatedField"
    >
      新增联动字段
    </el-button>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="handleClose">
        取消
      </el-button>
      <el-button
        type="primary"
        @click="updateConfig"
      >
        确定
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
import { operatorList } from 'packages/js/dict/chartDict'
export default {
  name: 'RalationSetting',
  components: {
  },
  directives: {
    block: {
      bind (el, binding) {
        el.style.width = binding.value || '100%'
        el.style.margin = '10px auto'
      }
    }
  },
  props: {
    settingVisible: {
      type: Boolean,
      default: false
    },
    configMap: {
      type: Object,
      default: () => ({})
    },
    sourceFieldList: {
      type: Array,
      default: () => []
    },
    targetFieldList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      operatorList
    }
  },
  computed: {
    configMapConfig: {
      get () {
        return this.configMap || {
          componentKey: '',
          maps: []
        }
      },
      set () { }
    },
    choosedTargetFields () {
      return this.configMapConfig.maps.map(item => item.targetField)
    }
  },
  mounted () { },
  methods: {
    /**
    * @description: 关闭弹窗
    */
    handleClose () {
      this.$emit('update:settingVisible')
    },
    /**
    * @description: 更新配置
    */
    updateConfig () {
      this.$emit('updateConfig', this.configMapConfig)
      this.handleClose()
    },
    /**
     * @description: 新增关联字段
     */
    addRelatedField () {
      this.configMapConfig.maps.push({
        targetField: '',
        sourceField: '',
        queryRule: '='
      })
    },
    handleDelete (index) {
      this.configMapConfig.maps.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
// Element-Ui样式覆盖
.bs-dialog {
  background: $bs-bg !important;

  .el-dialog__header {
    background: $bs-component;
    background-color: $bs-component;

    .el-dialog__title {
      color: $bs-title;
    }
  }

}
</style>

<style lang="scss" scoped>
.bs-table {
  border: 1px solid #e6ebf5;

  // border-bottom: 1px solid $bs-component;

  background:  $bs-component;
  background-color: $bs-component;

  ::v-deep .el-table__cell {
    background: $bs-component;
    background-color: $bs-component;

    .cell {
      color: $bs-title !important;
    }

    .el-input__inner {
      color: $bs-text;
      background-color: $bs-bg;

      &::placeholder {
        color: $bs-title;
      }
    }
  }
}

::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: $bs-bg !important;
  color: $bs-text !important;
}
</style>
