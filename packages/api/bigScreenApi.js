
import { get, post } from 'packages/utils/http'

// 大屏详情
export function getScreenInfo (code) {
  return get(`/bigScreen/design/info/code/${code}`)
}

// 保存更新大屏
export function saveScreen (data) {
  return post('/bigScreen/design/update', data)
}

// 根据数据集获取数据集详情
export function getDataSetDetails (id) {
  return get('/ds/getDataSetDetails', {
    id
  })
}
// 模拟后端返回自定义主题配置
export function getThemeConfig () {
  return get('https://mock.mengxuegu.com/mock/64239ff6e24b4b4cfeaca5ea/example/theme')
}

// 根据数据集id获取数据
export function getDataByDataSetId (dataSetId) {
  return post('/ds/getDataByDataSetId', {
    dataSetId,
    params: []
  })
}

// 得到图表详情
export function getChatInfo (params) {
  return post('/chart/data/list', params)
}
// 得到图表的更新数据
export function getUpdateChartInfo (params) {
  return post('/chart/data/chart', params)
}
