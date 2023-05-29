
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
    label: '进度条背景色',
    // 设置组件类型
    type: 'colorPicker',
    // 字段
    field: 'targetFill',
    // 对应options中的字段
    optionField: 'targetFill',
    value: '#fff',
    tabName: 'custom'
  },
  {
    label: '进度条颜色',
    // 设置组件类型
    type: 'colorPicker',
    // 字段
    field: 'currentFill',
    // 对应options中的字段
    optionField: 'currentFill',
    value: '#4a7af4',
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
const dataHandler = 'option.percent = data[0][setting.filter(settingItem=>settingItem.field === \'percent\')[0].value]' +
  '\noption.color = [option.frontColor, option.backColor];const currentFill = setting.find(settingItem=>settingItem.field === \'currentFill\').value;const targetFill = setting.find(settingItem=>settingItem.field === \'targetFill\').value;' +
  `option.progressStyle = ({ percent, type }) => {
    if (type === 'current') {
      return {
        // 进度条百分比部分样式
        fill:currentFill,
        radius: [0, 0, 30, 30],
        fillOpacity: 1,
        stroke: 'white',
        lineWidth: 0,
        shadowColor: 'black'
      }
    }
    return {
      // 进度条背景部分样式
      fill: targetFill,
      radius: [30, 30, 0, 0],
      fillOpacity: 1,
      stroke: 'white',
      lineWidth: 0,
      shadowColor: 'black'
    }
  }`

// 图表配置 new Gauge('domName', option)
const option = {
  height: 50,
  width: 400,
  autoFit: true,
  percent: 0.8,
  barWidthRatio: 0.3,
  backColor: '#E8EDF3',
  frontColor: '#4a7af4',
  color: ['#4a7af4', '#E8EDF3'],
  progressStyle: {
    current: {
      style: {
        radius: [0, 0, 30, 30],
        fillOpacity: 1,
        stroke: 'white',
        lineWidth: 0,
        shadowColor: 'black'
      }
    }
  },
  currentRadius: '30',
  targetRadius: '30',
  currentFill: '#4775E9', // 占比颜色
  targetFill: '#ffffff'// 背景色
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
