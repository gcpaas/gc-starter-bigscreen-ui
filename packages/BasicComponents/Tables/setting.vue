<template>
  <div>
    <el-form
      ref="form"
      :model="config"
      :rules="customRules"
      label-width="120px"
      label-position="left"
      class="setting-body"
    >
      <div class="lc-field-body">
        <div>
          <el-form-item label="表格名称">
            <el-input
              v-model="config.title"
              clearable
            />
          </el-form-item>
          <PosWhSetting
            :config="config"
            label-width="120px"
          />
          <el-form-item label="表格头部背景颜色">
            <ColorPicker
              v-model="config.customize.headerBackgroundColor"
              style="width:180px"
              placeholder="请选择表格头部字体颜色"
              :predefine-colors="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="表格头部字体颜色">
            <ColorPicker
              v-model="config.customize.headerFontColor"
              style="width:180px"
              placeholder="请选择表格头部字体颜色"
              :predefine-colors="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="表格头部字体大小">
            <el-input-number
              v-model="config.customize.headerFontSize"
              class="bs-el-input-number"
              :min="12"
              :max="100"
              :step="1"
            />
          </el-form-item>
          <el-form-item label="表格主体背景颜色">
            <ColorPicker
              v-model="config.customize.bodyBackgroundColor"
              style="width:180px"
              placeholder="请选择表格主体字体颜色"
              :predefine-colors="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="表格主体字体颜色">
            <ColorPicker
              v-model="config.customize.bodyFontColor"
              style="width:180px"
              placeholder="请选择表格主体字体颜色"
              :predefine-colors="predefineThemeColors"
            />
          </el-form-item>
          <el-form-item label="表格主体字体大小">
            <el-input-number
              v-model="config.customize.bodyFontSize"
              class="bs-el-input-number"
              :min="12"
              :max="100"
              :step="1"
            />
          </el-form-item>
          <el-form-item label="表格斑马线">
            <el-switch
              v-model="config.customize.stripe"
              class="bs-switch"
              active-color="#007aff"
            />
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from 'packages/ColorPicker/index.vue'
import { chartSettingMixins } from 'packages/js/mixins/chartSettingMixins'
import PosWhSetting from 'packages/BigScreenDesign/RightSetting/PosWhSetting.vue'
export default {
  components: {
    ColorPicker,
    PosWhSetting
  },
  mixins: [chartSettingMixins],
  data () {
    return {
      predefineThemeColors: [
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
  },
  computed: {
    config: {
      get () {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set (val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    },
    pageCode () {
      return this.$route.query.code
    }
  },
  watch: {},
  mounted () { },
  methods: {}
}
</script>

<style lang="scss">
// Element-UI Switch 组件样式覆盖
.bs-switch {
   .el-switch__core {
    background: var(--bs-el-background-1);
  }
}
</style>

<style lang="scss" scoped>
@import "../~packages/assets/style/settingWrap.scss";
</style>
