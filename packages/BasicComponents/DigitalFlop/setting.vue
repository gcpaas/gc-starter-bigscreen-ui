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
                  v-model="config.customize.style.fill"
                  :predefine="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="内容模板">
                <el-input v-model="config.customize.content" clearable />
              </el-form-item>
              <el-form-item label="对齐方式">
                <el-select v-model="config.customize.textAlign" clearable>
                  <el-option label="居中" value="center" />
                  <el-option label="右对齐" value="right" />
                  <el-option label="左对齐" value="left" />
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="偶数行背景色">
                <ColorPicker
                  v-model="config.customize.oddRowBGC"
                  :predefine="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="奇数行背景色">
                <ColorPicker
                  v-model="config.customize.evenRowBGC"
                  :predefine="predefineThemeColors"
                />
              </el-form-item>
              <el-form-item label="轮播时间间隔" label-width="100px">
                <el-input
                  v-model="config.customize.waitTime"
                  placeholder="请输入时间间隔"
                  clearable
                >
                  <template slot="append"> ms </template>
                </el-input>
              </el-form-item> -->
              <el-form-item label="字体大小">
                <el-input-number
                  v-model="config.customize.style.fontSize"
                  :precision="0"
                  label="请输入字体大小"
                />
              </el-form-item>
              <el-form-item label="小数位数">
                <el-input-number
                  v-model="config.customize.toFixed"
                  :precision="0"
                  label="请输入位数"
                />
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
.lc-field-body {
  padding: 12px;
}
</style>
