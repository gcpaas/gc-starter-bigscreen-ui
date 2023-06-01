<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      :model="config"
      label-width="100px"
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
          <el-form-item label="按钮名称">
            <el-input
              v-model="config.title"
              class="bs-el-input"
              clearable
            />
          </el-form-item>
          <el-form-item label="字体颜色">
            <ColorPicker
              v-model="config.customize.fontColor"
              :predefine="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="字体大小">
            <el-input-number
              v-model="config.customize.fontSize"
              class="bs-el-input-number"
              controls-position="right"
              :min="12"
              :max="100"
            />
          </el-form-item>
          <el-form-item label="类型">
            <el-select
              v-model="config.customize.type"
              popper-class="bs-el-select"
              class="bs-el-select"
              clearable
            >
              <el-option
                v-for="typeItem in typeOptions"
                :key="typeItem.value"
                :label="typeItem.label"
                :value="typeItem.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="背景颜色">
            <template>
              <div>
                {{ scope }}
                <ColorPicker
                  v-model="config.customize.backgroundColor"
                  :predefine="predefineThemeColors"
                />
              </div>
            </template>
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
              clearable
            >
              <el-option
                v-for="borderStyleItem in borderStyleOptions"
                :key="borderStyleItem.value"
                :label="borderStyleItem.label"
                :value="borderStyleItem.value"
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
  name: 'Border14Setting',
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
      typeOptions: [
        {
          label: '默认按钮',
          value: 'default'
        },
        {
          label: '主要按钮',
          value: 'primary'
        },
        {
          label: '文字按钮',
          value: 'text'
        },
        {
          label: '成功按钮',
          value: 'success'
        },
        {
          label: '信息按钮',
          value: 'info'
        },
        {
          label: '警告按钮',
          value: 'warning'
        },
        {
          label: '危险按钮',
          value: 'danger'
        }
      ],
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
  width: 97%;
  padding: 16px;
  padding-bottom: 70px;
}
</style>
