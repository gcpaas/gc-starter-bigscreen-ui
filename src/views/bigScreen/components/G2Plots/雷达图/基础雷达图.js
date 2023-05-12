
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
    label: "维度",
    // 设置组件类型， select / input / colorPicker
    type: "select",
    // 字段
    field: "xField",
    optionField: "xField", // 对应options中的字段
    // 是否多选
    multiple: false,
    // 绑定的值
    value: '',
    // tab页。 data: 数据， custom: 自定义
    tabName:'data'
  },
  {

    label: "指标",
    // 设置组件类型
    type: "select",
    // 字段
    field: "yField",
    // 对应options中的字段
    optionField: "yField",
    // 是否多选
    multiple: false,
    value: '',
    tabName:'data'
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

// 模拟数据
const data = [
  { name: 'G2', star: 10371 },
  { name: 'G6', star: 7380 },
  { name: 'F2', star: 7414 },
  { name: 'L7', star: 2140 },
  { name: 'X6', star: 660 },
  { name: 'AVA', star: 885 },
  { name: 'G2Plot', star: 1626 },
]

// 数据处理脚本
const dataHandler = ``

// 图表配置 new Line('domName', option)
const option = {
  data,
  xField: 'name',
  yField: 'star',
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  meta: {
    star: {
      alias: 'star 数量',
      min: 0,
      nice: true,
      formatter: (v) => Number(v).toFixed(2),
    },
  },
  xAxis: {
    tickLine: null,
  },
  yAxis: {
    label: false,
    grid: {
      alternateColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  // 开启辅助点
  point: {
    size: 2,
  },
  area: {},
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


