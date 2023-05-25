import { mapMutations, mapState } from 'vuex'
import _ from 'lodash'
import { randomString } from 'packages/js/utils'
import Contextmenu from 'vue-contextmenujs'
import Vue from 'vue'
Vue.use(Contextmenu)
export default {
  computed: {
    ...mapState({
      activeCode: state => state.bigScreen.activeCode,
      activeCodes: state => state.bigScreen.activeCodes,
      hoverCode: state => state.bigScreen.hoverCode,
      activeItemConfig: state => state.bigScreen.activeItemConfig,
      chartList: state => state.bigScreen.pageInfo.chartList,
      presetLine: state => state.bigScreen.presetLine
    })
  },
  data () {
    return {

    }
  },
  mounted () {},
  methods: {
    ...mapMutations('bigScreen', [
      'changeHoverCode',
      'changeActiveCode',
      'changeChartConfig',
      'addItem',
      'delItem',
      'resetPresetLine',
      'changeLayout',
      'changeZIndex',
      'changeLocked'
    ]),
    // 改变hover的组件
    changeHover (code) {
      this.changeHoverCode(code)
    },
    // 改变激活的组件
    changeActive (code) {
      this.changeActiveCode(code)
    },
    // 打开右侧面板
    openRightPanel (config) {
      this.changeActiveCode(config.code)
      this.$emit('openRightPanel', config)
    },
    // 复制组件
    copyItem (config) {
      const newConfig = _.cloneDeep(config)
      newConfig.code = randomString(8)
      newConfig.title = newConfig.title + '_副本'
      // 区分是从左侧添加还是复制的组件
      newConfig.isCopy = true
      newConfig.x = config.x + 20
      newConfig.y = config.y + 20
      if (config.group) {
        newConfig.group = 'copy_' + config.group
      }
      this.addItem(newConfig)
    },
    // 删除单个组件
    deleteItem (config) {
      this.$confirm('确定删除该组件吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'bs-el-message-box'
      }).then(() => {
        this.delItem(config.code)
      })
    },
    // 批量删除组合元素
    deleteGroupItem (config) {
      this.$confirm('确定批量删除选中的组件吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'bs-el-message-box'
      }).then(() => {
        // 找到和本组件group相同的组件 删除
        const codes = this.chartList.filter(_chart => _chart.group === config.group && config.group).map(_chart => _chart.code)
        this.delItem(codes)
      })
    },
    // 获取组件的坐标字符串，取整 （100， 100）
    getPoint ({ x, y }) {
      return `(${Math.round(x)}, ${Math.round(y)})`
    },
    // 组合/取消组合图表
    groupChart (chart) {
      if (!chart.group || chart.group === 'tempGroup') {
        // 添加组合
        // eslint-disable-next-line no-unused-expressions
        this.activeCodes?.forEach(code => {
          const config = this.chartList.find(item => item.code === code)
          this.changeChartConfig({
            ...config,
            group: `group_${chart.code}`
          })
        })
      } else {
        // 取消组合
        // 找到和本组件group相同的组件 取消group
        this.chartList.forEach(_chart => {
          if (_chart.group === chart.group) {
            this.changeChartConfig({
              ..._chart,
              group: ''
            })
          }
        })
      }
    },
    // 右键菜单
    onContextmenu (event, chart) {
      event.preventDefault()
      this.$contextmenu({
        items: [
          {
            label: '配置',
            icon: 'el-icon-setting',
            onClick: () => {
              this.openRightPanel(chart)
            }
          },
          {
            label: '删除',
            icon: 'el-icon-delete',
            onClick: () => {
              this.deleteItem(chart)
            }
          },
          {
            label: '批量删除',
            icon: 'el-icon-delete',
            onClick: () => {
              this.deleteGroupItem(chart)
            }
          },
          {
            label: '复制',
            icon: 'el-icon-copy-document',
            onClick: () => {
              this.copyItem(chart)
            }
          },
          {
            label: '置于顶层',
            icon: 'el-icon-arrow-up',
            onClick: () => {
              let chartList = _.cloneDeep(this.chartList)
              // 将当前图表置底
              chartList = chartList.filter(item => item.code !== chart.code)
              chartList.unshift(chart)
              this.changeLayout(chartList)
              this.changeZIndex(chartList)
            }
          },
          {
            label: '置于底层',
            icon: 'el-icon-arrow-down',
            onClick: () => {
              let chartList = _.cloneDeep(this.chartList)
              // 将当前图表置顶
              chartList = chartList.filter(item => item.code !== chart.code)
              chartList.push(chart)
              this.changeLayout(chartList)
              this.changeZIndex(chartList)
            }
          },
          {
            label: chart.locked ? '解锁' : '锁定',
            icon: chart.locked ? 'el-icon-unlock' : 'el-icon-lock',
            onClick: () => {
              this.changeLocked(chart)
            }
          },
          {
            label: (chart.group && chart.group !== 'tempGroup') ? '取消组合' : '组合',
            icon: (chart.group && chart.group !== 'tempGroup') ? 'iconfont-bigscreen icon-quxiaoguanlian' : 'iconfont-bigscreen icon-zuhe',
            onClick: () => {
              this.groupChart(chart)
            }
          }
        ],
        event, // 鼠标事件信息
        customClass: 'bs-context-menu-class', // 自定义菜单 class
        zIndex: 999, // 菜单样式 z-index
        minWidth: 150 // 主菜单最小宽度
      })
      return false
    }
  }
}
