<template>
  <div
    v-if="!pageLoading"
    class="bs-page-design-wrap bs-theme-wrap"
  >
    <PageTopSetting
      v-show="headerShow"
      ref="PageTopSetting"
      :right-fold="rightVisiable"
      @updateRightVisiable="updateRightVisiable"
      @showPageInfo="showPageInfo"
      @empty="empty"
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
        :style="{
          height: 'calc(100vh - 48px)'
        }"
      >
        <SketchDesignRuler
          :width="3000"
          :height="3000"
          :page-width="pageConfig.w"
          :page-height="pageConfig.h"
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
        <div class="footer-tools-bar">
          <el-slider
            class="bs-slider-wrap"
            :value="zoom"
            :min="10"
            style="width: 200px;margin-right: 20px;"
            @input="changeScreenZoom"
          />
          <span class="select-zoom-text">缩放比例</span>
          <el-select
            class="bs-el-select"
            popper-class="bs-el-select"
            :value="zoom"
            @change="changeScreenZoom"
          >
            <el-option
              v-for="zoom in zoomList"
              :key="zoom.value"
              :label="zoom.label"
              :value="zoom.value"
            />
          </el-select>
        </div>
      </div>
      <!-- 右侧折叠设置面板   -->
      <SettingPanel
        :header-show="headerShow"
        :height="height"
        :right-visiable.sync="rightVisiable"
        :page-info-visiable="pageInfoVisiable"
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
      default: 'calc(100vh - 40px)'
    }
  },
  data () {
    return {
      rightVisiable: false,
      pageInfoVisiable: false,
      ruleStartX: 100,
      ruleStartY: 100,
      zoomList: [
        {
          label: '100%',
          value: 100
        },
        {
          label: '80%',
          value: 80
        },
        {
          label: '50%',
          value: 50
        },
        {
          label: '20%',
          value: 20
        }
      ]
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
      hasGrid: state => state.bigScreen.hasGrid,
      zoom: state => state.bigScreen.zoom
    }),
    offset () {
      return {
        x: 260 + 50 - this.ruleStartX,
        y: 60 + 50 - this.ruleStartY
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
      'changeChartKey',
      'changeZoom'
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
      this.pageInfoVisiable = false
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
    },
    changeScreenZoom (zoom) {
      this.changeZoom(zoom)
    },
    updateRightVisiable (visiable) {
      this.rightVisiable = visiable
    },
    showPageInfo () {
      this.pageInfoVisiable = true
      this.rightVisiable = true
    }
  }
}
</script>
<style lang="scss" scoped>
.bs-page-design-wrap {
  overflow: hidden;

  .drag-wrap {
    display: flex;
    background-color: var(--bs-background-design-inner);
    height: calc(100vh - 40px);
    overflow: hidden;

    .grid-wrap-box {
      flex: 1;
      overflow: hidden;
      position: relative;
      margin: 8px 0 0 8px;

      .footer-tools-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 1000;
        background-color: var(--bs-background-2);

        .bs-select-wrap {
          margin-right: 16px;
        }

        .select-zoom-text {
          color: var(--bs-el-title);
          margin-right: 16px;
        }

        /deep/ .el-select {
          width: 150px !important
        }
      }
    }

    /deep/ .el-loading-mask {
      background-color: transparent !important
    }
  }
}
</style>
