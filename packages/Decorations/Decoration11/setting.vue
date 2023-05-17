<template>
  <div class="bs-setting-wrap">
    <el-form ref="form" :model="config" label-width="90px" label-position="left" class="setting-body">
      <el-collapse :value="['1']">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="lc-field-head">
              <div class="lc-field-title">
                自定义属性
              </div>
            </div>
          </template>

          <div class="lc-field-body">
            <el-form :model="config.customize" label-position="left" class="setting-body" label-width="90px">
              <el-form-item label="装饰名称">
                <el-input v-model="config.title" clearable />
              </el-form-item>
              <el-form-item label="装饰主颜色">
                <ColorPicker v-model="config.customize.decorationColor1" :predefine="predefineThemeColors" />
              </el-form-item>
              <el-form-item label="装饰副颜色">
                <ColorPicker v-model="config.customize.decorationColor2" :predefine="predefineThemeColors" />
              </el-form-item>
              <!-- <el-form-item label="标题文字">
                <el-input clearable placeholder="请输入标题文字" v-model="config.customize.title"/>
              </el-form-item>
              <el-form-item
                label="标题字体大小"
                label-width="100px"
              >
                <el-input
                  v-model="config.customize.fontSize"
                  placeholder="请输入标题字体大小"
                  clearable
                >
                  <template slot="append">
                    px
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item
                label="标题字体权重"
                label-width="100px"
              >
                <el-input-number
                  v-model="config.customize.fontWeight"
                  placeholder="请输入标题字体权重"
                />
              </el-form-item>
              <el-form-item
                label="标题字体颜色"
                label-width="100px"
              >
                <el-color-picker v-model="config.customize.color" :predefine="predefineThemeColors" />
              </el-form-item> -->
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from 'packages/common/ColorPicker/index.vue'
export default {
  name: "BarSetting",
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
    };
  },
  computed: {
    config: {
      get() {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set(val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    },
  },
  watch: {},
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.lc-field-body {
  padding: 12px;
}
</style>
