
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
  },
  {
    label: '颜色配置',
    // 设置组件类型
    type: 'colorSelect',
    // 字段
    field: 'color',
    // 对应options中的字段
    optionField: 'color',
    value: ['#4a7af4', '#E8EDF3'],
    tabName: 'custom'
  },
  {
    label: '不透明度',
    // 设置组件类型
    type: 'slider',
    // 字段
    field: 'progressStyle_fillOpacity',
    // 对应options中的字段
    optionField: 'progressStyle.fillOpacity',
    value: 1,
    tabName: 'custom'
  },
  {
    label: '边框颜色',
    // 设置组件类型
    type: 'colorPicker',
    // 字段
    field: 'progressStyle_stroke',
    // 对应options中的字段
    optionField: 'progressStyle.stroke',
    value: '#fff',
    tabName: 'custom'
  },
  {
    label: '边框宽度',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'progressStyle_lineWidth',
    // 对应options中的字段
    optionField: 'progressStyle.lineWidth',
    value: 0,
    tabName: 'custom'
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
  progressStyle: {
    r: 10,
    // fill: 'red',
    fillOpacity: 0.5,
    stroke: 'white',
    lineWidth: 1,
    // lineDash: [4, 5],
    // strokeOpacity: 0.7,
    shadowColor: 'black',
    // shadowBlur: 10,
    // shadowOffsetX: 5,
    // shadowOffsetY: 5,
    // cursor: 'pointer'
  }
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
