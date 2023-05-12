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
              <el-form-item label="轮播表名称">
                <el-input v-model="config.title" clearable />
              </el-form-item>
              <el-form-item label="表头背景色">
                <ColorPicker v-model="config.customize.headerBGC" :predefine="predefineThemeColors" />
              </el-form-item>
              <el-form-item label="偶数行背景色">
                <ColorPicker v-model="config.customize.oddRowBGC" :predefine="predefineThemeColors" />
              </el-form-item>
              <el-form-item label="奇数行背景色">
                <ColorPicker v-model="config.customize.evenRowBGC" :predefine="predefineThemeColors" />
              </el-form-item>
              <el-form-item
                label="轮播时间间隔"
                label-width="100px"
              >
                <el-input
                  v-model="config.customize.waitTime"
                  placeholder="请输入时间间隔"
                  clearable
                >
                  <template slot="append">
                    ms
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="显示行数">
                <el-input-number v-model="config.customize.rowNum" :precision="0" label="请输入行数"></el-input-number>
              </el-form-item>
              <el-form-item
                label="表头高度"
                label-width="100px"
              >
                <el-input
                  v-model="config.customize.headerHeight"
                  placeholder="请输入表头高度"
                  clearable
                >
                </el-input>
              </el-form-item>
              <el-form-item
                label="行号表头"
                label-width="100px"
              >
                <el-input
                  v-model="config.customize.indexHeader"
                  placeholder="请输入行号表头"
                  clearable
                >
                </el-input>
              </el-form-item>
               <el-form-item label="是否显示行号">
                <el-switch
                  v-model="config.customize.index"
                  :active-value="true"
                  :inactive-value="false"/>
              </el-form-item>
              <el-form-item label="悬浮暂停轮播">
                <el-switch
                  v-model="config.customize.hoverPause"
                  :active-value="true"
                  :inactive-value="false"/>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import ColorPicker from '@/views/bigScreen/common/ColorPicker/index.vue'
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
