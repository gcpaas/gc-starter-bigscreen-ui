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
      <el-collapse :value="['1', '2']">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="lc-field-head">
              <div class="lc-field-title">
                自定义属性
              </div>
            </div>
          </template>
          <div class="lc-field-body">
            <div>
              <!-- <el-form-item label="表格头部背景颜色">
                <ColorPicker
                  style="width:250px"
                  v-model="config.customize.headerBackgroundColor"
                  placeholder="请选择表格头部背景颜色"
                  :predefineColors="predefineThemeColors"
                />
              </el-form-item> -->
              <el-form-item label="表格头部字体颜色">
                <ColorPicker
                  v-model="config.customize.headerFontColor"
                  style="width:250px"
                  placeholder="请选择表格头部字体颜色"
                  :predefine-colors="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="表格头部字体大小">
                <el-input-number
                  v-model="config.customize.headerFontSize"
                  :min="12"
                  :max="100"
                  :step="1"
                />
              </el-form-item>
              <!-- <el-form-item label="表格主体背景颜色">
                <ColorPicker
                  style="width:250px"
                  v-model="config.customize.bodyBackgroundColor"
                  placeholder="请选择表格头部字体颜色"
                  :predefineColors="predefineThemeColors"
                />
              </el-form-item> -->
              <el-form-item label="表格主体字体颜色">
                <ColorPicker
                  v-model="config.customize.bodyFontColor"
                  style="width:250px"
                  placeholder="请选择表格主体字体颜色"
                  :predefine-colors="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="表格主体字体大小">
                <el-input-number
                  v-model="config.customize.bodyFontSize"
                  :min="12"
                  :max="100"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="表格斑马线">
                <el-switch
                  v-model="config.customize.stripe"
                  active-color="#007aff"
                />
              </el-form-item>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from 'packages/ColorPicker/index.vue'
import { chartSettingMixins } from 'packages/js/mixins/chartSettingMixins'
export default {
  components: {
    ColorPicker
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
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "../~packages/assets/style/settingWrap.scss";
</style>
