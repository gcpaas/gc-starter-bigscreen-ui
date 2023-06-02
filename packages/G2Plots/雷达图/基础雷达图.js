
// 分类
const category = 'Radar'
// 标题
const title = '基础雷达图'
// 类别， new Line()
const chartType = 'Radar'
// 用于标识，唯一，title的中文转拼音
const name = 'JiChuLeiDaTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    // 设置组件类型， select / input / colorPicker
    type: 'select',
    // 字段
    field: 'xField',
    optionField: 'xField', // 对应options中的字段
    // 是否多选
    multiple: false,
    // 绑定的值
    value: '',
    // tab页。 data: 数据， custom: 自定义
    tabName: 'data'
  },
  {
    label: '指标',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'yField',
    // 对应options中的字段
    optionField: 'yField',
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  /** 样式配置 **/
  // 图表 graph
  {
    label: '面积填充',
    type: 'switchNumber', // 设置组件类型
    field: 'area', // 字段
    optionField: 'area', // 对应options中的字段
    value: 1,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '是否平滑',
    type: 'switch', // 设置组件类型
    field: 'smooth', // 字段
    optionField: 'smooth', // 对应options中的字段
    value: false,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '颜色',
    type: 'gradual', // 设置组件类型
    field: 'color', // 字段
    optionField: 'color', // 对应options中的字段
    value: 'l(0) 0:#648ff7 1:#648ff7',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据点形状',
    type: 'select', // 设置组件类型
    field: 'point_shape', // 字段
    optionField: 'point.shape', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'circle',
    tabName: 'custom',
    options: [
      { label: '圆形', value: 'circle' },
      { label: '三角形', value: 'triangle' },
      { label: '菱形', value: 'diamond' }
    ],
    groupName: 'graph'
  },
  {
    label: '数据点颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'point_color', // 字段
    optionField: 'point.color', // 对应options中的字段
    value: '#ffffff',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据点大小',
    type: 'inputNumber', // 设置组件类型
    field: 'point_size', // 字段
    optionField: 'point.size', // 对应options中的字段
    value: 2,
    tabName: 'custom',
    groupName: 'graph'
  },
  // 边距 padding
  {
    label: '图表边距',
    type: 'padding', // 设置组件类型
    field: 'appendPadding', // 字段
    optionField: 'appendPadding', // 对应options中的字段
    value: [20, 20, 20, 20],
    tabName: 'custom',
    groupName: 'padding'
  }
]

// 模拟数据
const data = [
  { name: 'G2', star: 10371 },
  { name: 'G6', star: 7380 },
  { name: 'F2', star: 7414 },
  { name: 'L7', star: 2140 },
  { name: 'X6', star: 660 },
  { name: 'AVA', star: 885 },
  { name: 'G2Plot', star: 1626 }
]

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  xField: 'name',
  yField: 'star',
  smooth: false,
  color: 'l(90) 0:#648ff7 1:#648ff7',
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  meta: {
    star: {
      alias: 'star 数量',
      min: 0,
      nice: true,
      formatter: (v) => Number(v).toFixed(2)
    }
  },
  xAxis: {
    tickLine: null
  },
  yAxis: {
    label: false,
    grid: {
      alternateColor: 'rgba(0, 0, 0, 0.04)'
    }
  },
  // 开启辅助点
  point: {
    color: '',
    shape: '',
    size: 2
  },
  area: 1
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
