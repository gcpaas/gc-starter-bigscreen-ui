import { commonConfig } from 'packages/config'

export const settingConfig = {
  padding: [30, 30, 50, 80],
  legend: false,
  isGroup: true,
  data: [],
  color: '',
  theme: 'dark',
  // displayOption: { ...displayOption }
  displayOption: {
    dataAllocation: {
      // 是否存在数据配置
      enable: false
    }
  }
}
const customConfig = {
  type: 'map',
  root: {
    contribution: false
  },
  customize: {
    // 是否显示文字
    mapName: false,
    // 地图背景色
    backgroundColor: '#404a59',
    // 是否打点
    scatter: true,
    // 悬浮框背景色
    tooltipBackgroundColor: '#0C121C',
    // 悬浮框边框色
    borderColor: 'rgba(0, 0, 0, 0.16)',
    // 打点图背景颜色
    scatterBackgroundColor: 'rgba(255,0,0,.7)',
    // 打点图文字颜色
    scatterColor: '#fff',
    // 分割线颜色
    mapLineColor: 'rgba(147, 235, 248, 1)',
    // 地图级别
    level: 'country',
    // 范围
    scope: '中国',
    // 地图区域颜色
    areaColor: '#007aff',
    // 是否开启筛选
    visual: false,
    // 筛选范围
    range: [0, 6000],
    // 从上到下的颜色
    rangeColor: ['#007aff', '#A5CC82'],
    // 地图数据
    dataMap: '中华人民共和国.json'
  }
}
export const dataConfig = {
  ...commonConfig(customConfig)
}
