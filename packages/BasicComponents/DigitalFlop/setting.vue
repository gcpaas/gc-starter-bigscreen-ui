<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
      class="setting-body"
    >
      <el-collapse :value="['1']">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="lc-field-head">
              <div class="lc-field-title">自定义属性</div>
            </div>
          </template>

          <div class="lc-field-body">
            <el-form
              :model="config.customize"
              label-position="left"
              class="setting-body"
              label-width="90px"
            >
              <el-form-item label="轮播表名称">
                <el-input v-model="config.title" clearable />
              </el-form-item>
              <el-form-item label="字体颜色">
                <ColorPicker
                  v-model="config.customize.color"
                  :predefine="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="卡片背景颜色">
                <ColorPicker
                  v-model="config.customize.bgColor"
                  :predefine="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="卡片边框颜色">
                <ColorPicker
                  v-model="config.customize.borderColor"
                  :predefine="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="卡片边框粗度">
                <el-input-number
                  v-model="config.customize.borderWidth"
                  class="bs-el-input-number"
                  :min="0"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="字体大小">
                <el-input-number
                  v-model="config.customize.fontSize"
                  class="bs-el-input-number"
                  :min="12"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="卡片宽度">
                <el-input-number
                  v-model="config.customize.width"
                  class="bs-el-input-number"
                  :min="0"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="卡片圆角">
                <el-input-number
                  v-model="config.customize.borderRadius"
                  class="bs-el-input-number"
                  :min="0"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="逗号分隔位置">
                <el-input-number
                  v-model="config.customize.formatter"
                  class="bs-el-input-number"
                  :min="0"
                  :max="100"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="字体粗细">
                <el-input-number
                  v-model="config.customize.fontWeight"
                  class="bs-el-input-number"
                  :min="0"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="数字位数">
                <el-input-number
                  v-model="config.customize.numberDigits"
                  class="bs-el-input-number"
                  :min="0"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="卡片距离">
                <el-input-number
                  v-model="config.customize.marginRight"
                  class="bs-el-input-number"
                  :min="0"
                  :step="1"
                />
              </el-form-item>
              <el-form-item label="补位值">
                <el-input v-model="config.customize.placeHolder" clearable />
              </el-form-item>
              <el-form-item label="头部填充">
                <el-input v-model="config.customize.slotLeft" clearable />
              </el-form-item>
              <el-form-item label="尾部填充">
                <el-input v-model="config.customize.slotRight" clearable />
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from 'packages/ColorPicker/index.vue'
export default {
  name: 'BarSetting',
  components: {
    ColorPicker
  },
  data() {
    return {
      // 预设主题色
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
      get() {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set(val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../~packages/assets/style/settingWrap.scss';
.lc-field-body {
  padding: 12px;
}
</style>
