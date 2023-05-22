/*
 * @description: vuex mutations 事件
 * @Date: 2023-03-13 10:04:59
 * @Author: xing.heng
 * @LastEditors: xing.heng
 * @LastEditTime: 2023-04-24 16:58:45
 */

import Vue from 'vue'
import _ from 'lodash'
import { defaultData } from './state'
export default {
  // 改变页面基本信息，后端请求的页面信息存储到此处
  changePageInfo (state, pageInfo) {
    state.pageInfo = pageInfo
  },
  // 改变组件列表
  changeLayout (state, layout) {
    state.pageInfo.chartList = layout
  },
  // 改变当前选择组件id
  changeActiveCode (state, code) {
    state.activeCode = code
    state.hoverCode = code

    const activeItem = _.cloneDeep(state.pageInfo.chartList?.find(
      item => item.code === code
    ))
    changeGroup(code, state)
    if (activeItem) {
      state.activeItemConfig = _.cloneDeep(activeItem)
    }
  },
  changeActiveCodes (state, codes) {
    state.activeCodes = codes
    state.pageInfo.chartList = state.pageInfo.chartList?.map(chart => {
      return {
        ...chart,
        group: (codes.includes(chart.code) && !chart.group) ? 'tempGroup' : chart.group
      }
    })
  },
  // 改变当前hover组件id
  changeHoverCode (state, code) {
    state.hoverCode = code
  },
  changePageLoading (state, booleanValue) {
    state.pageLoading = booleanValue
  },
  // 改变当前组件配置
  changeChartConfig (state, itemConfig) {
    const index = state.pageInfo.chartList.findIndex(
      item => item.code === itemConfig.code
    )
    Vue.set(state.pageInfo.chartList, index, {
      ...state.pageInfo.chartList[index],
      ...itemConfig
    })
    // 对比之前的config和当前的itemConfig的xywh，如果有变化，就改变卡尺对齐线
    const oldConfig = state.pageInfo.chartList[index]
    if (
      oldConfig.x !== itemConfig.x ||
      oldConfig.y !== itemConfig.y ||
      oldConfig.w !== itemConfig.w ||
      oldConfig.h !== itemConfig.h
    ) {
      // 改变当前组件的卡尺对齐线
      changePresetLine(state, itemConfig)
    }
  },
  setPresetLine (state, { x, y, w, h }) {
    state.presetLine = [
      { type: 'h', site: y || 0 },
      { type: 'v', site: x || 0 }
    ]
  },
  changeActiveItemConfig (state, config) {
    state.activeItemConfig = _.cloneDeep(config)
  },
  // 新增一个组件
  addItem (state, itemConfig) {
    // 放到第一项
    state.pageInfo.chartList.unshift(itemConfig)
    changeZIndexFuc(state, state.pageInfo.chartList)
  },
  // 删除组件/批量删除组件
  delItem (state, codes) {
    if (Array.isArray(codes)) {
      state.pageInfo.chartList = state.pageInfo.chartList.filter(chart => !codes.includes(chart.code))
    } else {
      state.pageInfo.chartList = state.pageInfo.chartList.filter(chart => codes !== chart.code)
    }
  },
  changePageConfig (state, pageConfig) {
    Vue.set(state.pageInfo, 'pageConfig', _.cloneDeep(pageConfig))
    state.updateKey = new Date().getTime()
  },
  changeActiveItem (state, activeItem) {
    state.activeItem = _.cloneDeep(activeItem)
    state.activeId = activeItem.code
    // state.settingJson = _.cloneDeep(activeItem.settingConfig) || {}
  },
  // 清空卡尺对齐线
  resetPresetLine (state) {
    state.presetLine = []
  },
  // 改变组件的层级
  changeZIndex (state, list) {
    changeZIndexFuc(state, list)
  },
  // 改变锁定状态
  changeLocked (state, config) {
    const index = state.pageInfo.chartList.findIndex(
      item => item.code === config.code
    )
    Vue.set(state.pageInfo.chartList[index], 'locked', !config.locked)
  },
  // 改变网格显示状态
  changeGridShow (state, isShow) {
    state.hasGrid = isShow
  },
  // 改变组件的key
  changeChartKey (state, code) {
    const index = state.pageInfo.chartList.findIndex(
      item => item.code === code
    )
    if (index < 0) {
      return
    }
    const config = state.pageInfo.chartList[index]
    Vue.set(config, 'key', config.code + new Date().getTime())
  },
  // 改变缓存数据集中的字段列表
  changeCacheDataFields (state, { dataSetId, data }) {
    // 将 state.pageInfo.pageConfig.cacheDataSets 中的 dataSetId 对应fields字段数据替换为 data
    const index = state.pageInfo.pageConfig.cacheDataSets.findIndex(cacheData => cacheData.dataSetId === dataSetId)
    if (index < 0) {
      return
    }
    Vue.set(state.pageInfo.pageConfig.cacheDataSets[index], 'fields', data?.fields || [])
  },
  // 改变缓存数据集中的数据
  changeCacheDataSetData (state, { dataSetId, data }) {
    const index = state.pageInfo.pageConfig.cacheDataSets.findIndex(cacheData => cacheData.dataSetId === dataSetId)
    if (index < 0) {
      return
    }
    state.pageInfo.pageConfig.cacheDataSets[index].data = data || []
  },
  // 改变shift是否被按下
  changeShiftDown (state, isDown) {
    state.shiftKeyDown = isDown
  },
  // 初始化store中的数据，防止污染
  resetStoreData (state) {
    for (const stateKey in state) {
      state[stateKey] = _.cloneDeep(defaultData[stateKey])
    }
  },
  changeZoom (state, zoom) {
    state.zoom = zoom
  }
}
function changeZIndexFuc (state, list) {
  const len = list?.length - 1 || 0
  list.forEach((item, i) => {
    const index = state.pageInfo.chartList.findIndex(
      _item => _item.code === item.code
    )
    Vue.set(state.pageInfo.chartList[len - index], 'z', i)
  })
}

// 改变当前组件的卡尺对齐线
function changePresetLine (state, { x, y, w, h }) {
  state.presetLine = [
    { type: 'h', site: y || 0 },
    { type: 'v', site: x || 0 }
  ]
}

function changeGroup (code, state) {
  if (code) {
    // 找到和此组件group相同的组件，并添加到activeCodes中
    const group = state.pageInfo.chartList?.find(item => item.code === code)?.group
    if (group) {
      state.activeCodes = state.pageInfo.chartList?.filter(chart => chart.group === group && chart.group).map(item => item.code)
    }
    if (state.shiftKeyDown) {
      state.activeCodes = _.uniq([...state.activeCodes, code])
      // eslint-disable-next-line no-unused-expressions
      state.pageInfo.chartList?.forEach(chart => {
        if (state.activeCodes.includes(chart.code)) {
          chart.group = 'tempGroup'
        }
      })
    } else {
      if (!group) {
        state.activeCodes = [code]
      }
    }
  } else {
    state.activeCodes = []
    state.pageInfo.chartList = state.pageInfo.chartList?.map(chart => ({
      ...chart,
      group: chart.group === 'tempGroup' ? '' : chart.group
    }))
  }
}
