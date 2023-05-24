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
        <el-form
          :model="config.customize"
          label-position="left"
          class="setting-body"
          label-width="100px"
        >
          <el-form-item label="排名轮播表名称">
            <el-input
              v-model="config.title"
              clearable
            />
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
            <el-input-number
              v-model="config.customize.rowNum"
              class="bs-el-input-number"
              :precision="0"
              label="请输入行数"
            />
          </el-form-item>
          <el-form-item label="数值单位">
            <el-input
              v-model="config.customize.unit"
              clearable
            />
          </el-form-item>
          <el-form-item label="自动排序">
            <el-switch
              v-model="config.customize.sort"
              :active-value="true"
              :inactive-value="false"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'BarSetting',
  components: {
  },
  data () {
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
      get () {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set (val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    }
  },
  watch: {},
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.lc-field-body {
  padding: 12px;
}
</style>
