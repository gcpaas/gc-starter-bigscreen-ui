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
          label-width="90px"
        >
          <el-form-item label="边框名称">
            <el-input v-model="config.title" clearable />
          </el-form-item>
          <el-form-item label="边框线颜色">
            <ColorPicker
              v-model="config.customize.borderColor"
              placeholder="请选择边框线颜色"
              :predefine-colors="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="背景色">
            <ColorPicker
              v-model="config.customize.backgroundColor"
              placeholder="请选择背景色"
              style="width: 250px"
              :predefine-colors="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="边框线宽度">
            <el-input-number
              v-model="config.customize.borderWidth"
              class="bs-el-input-number"
            />
          </el-form-item>
          <el-form-item label="长度">
            <el-input-number
              v-model="config.customize.height"
              class="bs-el-input-number"
            />
          </el-form-item>
          <el-form-item label="宽度">
            <el-input-number
              v-model="config.customize.width"
              class="bs-el-input-number"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from 'packages/ColorPicker/index.vue'
export default {
  name: 'Border14Setting',
  components: {
    ColorPicker
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
  data() {
    return {}
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.lc-field-body {
  padding: 16px;
}
</style>
