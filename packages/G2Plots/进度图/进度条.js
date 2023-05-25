
// 分类
const category = 'Progress'
// 标题
const title = '进度条'
// 类别， new Gauge()
const chartType = 'Progress'
// 用于标识，唯一，和文件夹名称一致
const name = 'JinDuTiao'

// 右侧配置项
const setting = [
  {
    label: '指标',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'percent',
    // 对应options中的字段
    optionField: 'percent',
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  }
]

// 数据处理脚本
const dataHandler = 'option.percent = data[0][setting.filter(settingItem=>settingItem.field === \'percent\')[0].value]'

// 图表配置 new Gauge('domName', option)
const option = {
  height: 100,
  width: 300,
  autoFit: true,
  percent: 0.536,
  barWidthRatio: 0.3,
  color: ['#4a7af4', '#E8EDF3'],
}
export default {
  category,
  title,
  chartType,
  name,
  option,
  setting,
  dataHandler
}
