<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
      class="setting-body"
    >
      <div class="lc-field-body">
        <slot name="top" />
        <el-form
          :model="config.customize"
          label-position="left"
          class="setting-body"
          label-width="100px"
        >
          <PosWhSetting :config="config" />
          <el-form-item label="输入框类型">
            <el-select
              v-model="config.customize.type"
              popper-class="bs-el-select"
              class="bs-el-select"
            >
              <el-option
                v-for="typeItem in typeOptions"
                :key="typeItem.value"
                :label="typeItem.label"
                :value="typeItem.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="是否显示标题">
            <el-switch
              v-model="config.customize.showTitle"
              class="bs-el-switch"
              active-color="#007aff"
            />
          </el-form-item>
          <el-form-item
            v-if="config.customize.showTitle"
            label="标题"
          >
            <el-input
              v-model="config.customize.title"
              class="bs-el-input"
              clearable
            />
          </el-form-item>
          <el-form-item
            v-if="config.customize.showTitle"
            label="标题位置"
          >
            <el-select
              v-model="config.customize.titlePosition"
              popper-class="bs-el-select"
              class="bs-el-select"
            >
              <el-option
                v-for="titlePosition in titlePositionOptions"
                :key="titlePosition.value"
                :label="titlePosition.label"
                :value="titlePosition.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            v-if="config.customize.showTitle"
            label="标题大小"
          >
            <el-input-number
              v-model="config.customize.titleStyle.fontSize"
              class="bs-el-input-number"
              controls-position="right"
              :min="12"
              :max="100"
            />
          </el-form-item>
          <el-form-item
            v-if="config.customize.showTitle"
            label="标题颜色"
          >
            <ColorPicker
              v-model="config.customize.titleStyle.color"
              :predefine="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item
            v-if="config.customize.showTitle"
            label="标题间距"
          >
            <el-input-number
              v-model="config.customize.titleStyle.margin"
              class="bs-el-input-number"
              controls-position="right"
              :min="0"
              :max="100"
            />
          </el-form-item>
          <el-form-item label="背景颜色">
            <ColorPicker
              v-model="config.customize.backgroundColor"
              :predefine="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="占位符">
            <el-input
              v-model="config.customize.placeholder"
              class="bs-el-input"
              clearable
            />
          </el-form-item>
          <el-form-item label="占位符字体颜色">
            <ColorPicker
              v-model="config.customize.placeholderColor"
              :predefine="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="边框颜色">
            <ColorPicker
              v-model="config.customize.borderStyle.borderColor"
              :predefine="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="边框宽度">
            <el-input-number
              v-model="config.customize.borderStyle.borderWidth"
              class="bs-el-input-number"
              controls-position="right"
              :min="0"
              :max="10"
            />
          </el-form-item>
          <el-form-item label="边框样式">
            <el-select
              v-model="config.customize.borderStyle.borderStyle"
              popper-class="bs-el-select"
              class="bs-el-select"
            >
              <el-option
                v-for="borderStyle in borderStyleOptions"
                :key="borderStyle.value"
                :label="borderStyle.label"
                :value="borderStyle.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="边框圆角">
            <el-input-number
              v-model="config.customize.borderStyle.borderRadius"
              class="bs-el-input-number"
              controls-position="right"
              :min="0"
              :max="100"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from 'packages/ColorPicker/index.vue'
import PosWhSetting from 'packages/BigScreenDesign/RightSetting/PosWhSetting.vue'
export default {
  name: 'InputSetting',
  components: {
    ColorPicker,
    PosWhSetting
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    predefineThemeColors: {
      type: Array,
      default: () => {
        return [
          '#007aff',
          '#1aa97b',
          '#ff4d53',
          '#1890FF',
          '#DF0E1B',
          '#0086CC',
          '#2B74CF',
          '#00BC9D',
          '#ED7D32'
        ]
      }
    }
  },
  data () {
    return {
      // 输入框类型
      typeOptions: [
        {
          label: '单行文本',
          value: 'text'
        },
        {
          label: '多行文本',
          value: 'textarea'
        }
      ],
      // 标题位置
      titlePositionOptions: [
        {
          label: '左',
          value: 'left'
        },
        {
          label: '右',
          value: 'right'
        },
        {
          label: '上',
          value: 'top'
        },
        {
          label: '下',
          value: 'bottom'
        }
      ],
      // 边框样式
      borderStyleOptions: [
        {
          label: '实线',
          value: 'solid'
        },
        {
          label: '虚线',
          value: 'dashed'
        },
        {
          label: '点线',
          value: 'dotted'
        }
      ]
    }
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.lc-field-body {
  padding: 16px;
}
</style>
