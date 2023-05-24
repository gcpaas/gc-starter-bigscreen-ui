
// 分类
const category = 'Treemap'
// 标题
const title = '基础矩形树图'
// 类别， new Line()
const chartType = 'Treemap'
// 用于标识，唯一，title的中文转拼音
const name = 'JiChuJuXingShuTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    // 设置组件类型， select / input / colorPicker
    type: 'select',
    // 字段
    field: 'colorField',
    optionField: 'colorField', // 对应options中的字段
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
    field: 'valueField',
    // 对应options中的字段
    optionField: 'valueField',
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
    value: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
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

// 模拟数据
const data = {
  name: 'root',
  children: [
    { name: '分类 1', value: 560 },
    { name: '分类 2', value: 500 },
    { name: '分类 3', value: 150 },
    { name: '分类 4', value: 140 },
    { name: '分类 5', value: 115 },
    { name: '分类 6', value: 95 },
    { name: '分类 7', value: 90 },
    { name: '分类 8', value: 75 },
    { name: '分类 9', value: 98 },
    { name: '分类 10', value: 60 },
    { name: '分类 11', value: 45 },
    { name: '分类 12', value: 40 },
    { name: '分类 13', value: 40 },
    { name: '分类 14', value: 35 },
    { name: '分类 15', value: 40 },
    { name: '分类 16', value: 40 },
    { name: '分类 17', value: 40 },
    { name: '分类 18', value: 30 },
    { name: '分类 19', value: 28 },
    { name: '分类 20', value: 16 }
  ]
}

// 数据处理脚本
const dataHandler = `data = {
  name: 'root',
  children: data?.map(d => ({
    ...d,
    name: d[option.colorField],
    value: d[option.valueField]
  }))
};`

// 图表配置 new Line('domName', option)
const option = {
  data,
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  colorField: 'name',
  valueField: 'value'
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
