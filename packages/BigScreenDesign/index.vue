<template>
  <div
    v-if="!pageLoading"
    class="bs-page-design-wrap"
  >
    <PageTopSetting
      v-show="headerShow"
      ref="PageTopSetting"
      @empty="empty"
      @click.native="changeActiveCode('')"
    />
    <div class="drag-wrap">
      <!-- 左侧面板 -->
      <LeftPanel
        :header-show="headerShow"
        :height="height"
        @openRightPanel="openRightPanel"
      />
      <!-- 中间组件展示面板 -->
      <div
        v-loading="pageLoading"
        class="grid-wrap-box"
        :style="{ height }"
      >
        <SketchDesignRuler
          :width="pageConfig.w"
          :height="pageConfig.h"
          @changeStart="changeStart"
        >
          <MouseSelect
            :offset-x="offset.x"
            :offset-y="offset.y"
            @selectArea="onSelectArea"
          >
            <Render
              ref="Render"
              :class="{
                'grid-bg': hasGrid
              }"
              @openRightPanel="openRightPanel"
            />
          </MouseSelect>
        </SketchDesignRuler>
      </div>
      <!-- 右侧折叠设置面板   -->
      <SettingPanel
        :header-show="headerShow"
        :height="height"
        :right-visiable.sync="rightVisiable"
        @updateSetting="updateSetting"
        @updateDataSetting="updateDataSetting"
      />
    </div>
  </div>
</template>
<script>
import LeftPanel from './LeftPanel.vue'
import SettingPanel from './SettingPanel.vue'
import PageTopSetting from './PageDesignTop.vue'
import Render from '../Render'
import { mapActions, mapMutations, mapState } from 'vuex'
import SketchDesignRuler from 'packages/BigScreenDesign/RulerTool/SketchRuler.vue'
import { G2 } from '@antv/g2plot'
import multipleSelectMixin from 'packages/js/mixins/multipleSelectMixin'
import { getThemeConfig } from 'packages/js/api/bigScreenApi'
import MouseSelect from './MouseSelect/index.vue'
import _ from 'lodash'
export default {
  name: 'BigScreenDesign',
  components: {
    PageTopSetting,
    LeftPanel,
    Render,
    SketchDesignRuler,
    MouseSelect,
    SettingPanel
  },
  mixins: [multipleSelectMixin],
  props: {
    code: {
      type: String,
      default: ''
    },
    headerShow: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: 'calc(100vh - 53px)'
    }
  },
  data () {
    return {
      rightVisiable: true,
      ruleStartX: 0,
      ruleStartY: 0
    }
  },
  computed: {
    ...mapState({
      pageInfo: state => state.bigScreen.pageInfo,
      chartList: state => state.bigScreen.pageInfo.chartList,
      pageConfig: state => state.bigScreen.pageInfo.pageConfig,
      pageLoading: state => state.bigScreen.pageLoading,
      hoverCode: state => state.bigScreen.hoverCode,
      presetLine: state => state.bigScreen.presetLine,
      updateKey: state => state.bigScreen.updateKey,
      hasGrid: state => state.bigScreen.hasGrid
    }),
    offset () {
      return {
        x: 340 - this.ruleStartX,
        y: 73 - this.ruleStartY
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 重置大屏的vuex store
      vm.$store.commit('bigScreen/resetStoreData')
    })
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions('bigScreen', [
      'initLayout'
    ]),
    ...mapMutations('bigScreen', [
      'changeLayout',
      'changePageLoading',
      'resetPresetLine',
      'changeActiveCode',
      'changeActiveCodes',
      'changePageConfig',
      'changeChartConfig',
      'changeChartKey'
    ]),
    init () {
      this.changePageLoading(true)
      this.initLayout(this.$route.query.code || this.code).then(() => {
        const themeName = this.pageConfig.customTheme
        if (!['dark', 'light', 'auto'].includes(themeName)) {
          getThemeConfig().then((res) => {
            // 初始化时如果就是自定义主题则统一注册
            const { registerTheme } = G2
            registerTheme(themeName, { ...res.chart })
            const pageConfig = this.pageConfig
            pageConfig.themeJson = res
            this.changePageConfig(pageConfig)
            this.changePageLoading(false)
          })
        } else {
          this.changePageLoading(false)
        }
      }).finally(() => {
        setTimeout(() => {
          this.resetPresetLine()
        }, 500)
      })
    },
    // 点击当前组件时打开右侧面板
    openRightPanel (card) {
      this.rightVisiable = true
    },
    /**
     * @description: 清空页面
     */
    empty () {
      this.$confirm('确定清空页面吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.changeLayout([])
        this.resetPresetLine()
      }).catch(() => {
      })
    },
    // 自定义属性更新
    updateSetting (config) {
      config.key = new Date().getTime()
      this.changeChartConfig(_.cloneDeep(config))
    },
    // 动态属性更新
    updateDataSetting (config) {
      this.$refs.Render.$refs['RenderCard' + config.code][0].$refs[config.code].updateChartData(config)
    },
    onSelectArea (area) {
      const { startX, startY, endX, endY } = area
      // 计算所有在此区域中的组件，如果在此区域中，将其code添加到activeCodes数组中
      const activeCodes = this.chartList?.filter(chart => {
        const { x, y, w, h } = chart
        return startX <= x && x + w <= endX && startY <= y && y + h <= endY
      })?.map(chart => chart.code)
      this.changeActiveCodes(activeCodes)
    },
    changeStart ({ x, y }) {
      this.ruleStartX = x
      this.ruleStartY = y
    },
    // 保存并预览
    saveAndPreview () {
      this.$refs.PageTopSetting.execRun()
    },
    // 保存
    save () {
      this.$refs.PageTopSetting.save('saveLoading')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~packages/assets/style/themeVar.scss';
.bs-page-design-wrap {
  overflow: hidden;
  background: $bs-bg;

  .drag-wrap {
    display: flex;

    .grid-wrap-box {
      flex: 1;
      overflow: hidden;
      position: relative;
      border-top: 1px solid #dfe1e5;
    }

    /deep/ .el-loading-mask {
      background-color: transparent !important
    }
  }

  .grid-bg {
    background: #5588aa40 !important;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 0),
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 0) !important;
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px !important;
  }
}
</style>
