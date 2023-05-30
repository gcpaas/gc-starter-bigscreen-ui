
// 分类
const category = 'Liquid'
// 标题
const title = '矩形水波图'
// 类别， new Liquid()
const chartType = 'Liquid'
// 用于标识，唯一，和文件夹名称一致
const name = 'JuXingShuiBoTu'

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
  // {
  //   label: '贴图类型',
  //   // 设置组件类型
  //   type: 'select',
  //   // 字段
  //   field: 'pattern_type',
  //   // 对应options中的字段
  //   optionField: 'pattern.type',
  //   // 是否多选
  //   multiple: false,
  //   value: '',
  //   tabName: 'custom',
  //   options: [
  //     { label: '圆点', value: 'dot' },
  //     { label: '条形', value: 'line' },
  //     { label: '矩形', value: 'square' }
  //   ]
  // },
  {
    label: '标签字体颜色',
    // 设置组件类型
    type: 'colorPicker',
    // 字段
    field: 'statistic_content_style_fill',
    // 对应options中的字段
    optionField: 'statistic.content.style.fill',
    value: '#d0d0d0',
    tabName: 'custom'
  },
  {
    label: '标签字体大小',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'statistic_content_style_fontSize',
    // 对应options中的字段
    optionField: 'statistic.content.style.fontSize',
    value: 35,
    tabName: 'custom'
  },
  {
    label: '边框宽度',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'outline_border',
    // 对应options中的字段
    optionField: 'outline.border',
    value: 2,
    tabName: 'custom'
  },
  {
    label: '边框距离',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'outline_distance',
    // 对应options中的字段
    optionField: 'outline.distance',
    value: 0,
    tabName: 'custom'
  },
  {
    label: '边框颜色',
    // 设置组件类型
    type: 'colorPicker',
    // 字段
    field: 'outline_style_stroke',
    // 对应options中的字段
    optionField: 'outline.style.stroke',
    value: '#ffffff',
    tabName: 'custom'
  },
  {
    label: '水波颜色',
    type: 'gradual', // 设置组件类型
    field: 'liquidStyle_fill', // 字段
    optionField: 'liquidStyle.fill', // 对应options中的字段
    value: 'l(90) 0:#6591F7 1:#1890ff',
    tabName: 'custom'
  },
  {
    label: '图表边距',
    type: 'padding', // 设置组件类型
    field: 'appendPadding', // 字段
    optionField: 'appendPadding', // 对应options中的字段
    value: [20, 20, 20, 20],
    tabName: 'custom'
  }
]

// 数据处理脚本
const dataHandler = '// 取返回数据列表的第一项指标值\noption.percent = data[0][setting.filter(settingItem=>settingItem.field === \'percent\')[0].value]'

// 图表配置 new Liquid('domName', option)
const option = {
  percent: 0.25,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  shape: 'rect',
  outline: {
    border: 2, // 边框宽度
    distance: 0, // 边框距离
    style: {
      stroke: '#ffffff', // 边框颜色
    }
  },
  liquidStyle: {
    fill: 'l(90) 0:#1890ff 1:#ffffff',
    stroke: 'black',
    lineWidth: 0,
    strokeOpacity: 0
  },
  statistic: {
    content: {
      style: {
        fontSize: 35,
        lineHeight: 1,
        fill: '#d0d0d0'
      }
    }
  },
  wave: {
    length: 128
  },
  pattern: {
    type: ''
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
