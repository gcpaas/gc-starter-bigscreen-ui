
// 分类
const category = 'Funnel'
// 标题
const title = '基础漏斗图'
// 类别， new Line()
const chartType = 'Funnel'
// 用于标识，唯一，title的中文转拼音
const name = 'JiChuLouDouTu'

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
  {
    label: '数据体现方式',
    type: 'select', // 设置组件类型
    field: 'dynamicHeight', // 字段
    optionField: 'dynamicHeight', // 对应options中的字段
    value: false,
    tabName: 'custom',
    options: [
      {
        label: '通过宽度',
        value: false
      },
      {
        label: '通过高度',
        value: true
      }
    ]
  },
  {
    label: '方向',
    type: 'select', // 设置组件类型
    field: 'isTransposed', // 字段
    optionField: 'isTransposed', // 对应options中的字段
    value: false,
    tabName: 'custom',
    options: [
      {
        label: '竖向',
        value: false
      },
      {
        label: '横向',
        value: true
      }
    ]
  },
  {
    label: '标签',
    type: 'input', // 设置组件类型
    field: 'conversionTagName', // 字段
    optionField: 'conversionTagName', // 对应options中的字段
    value: '转化率',
    tabName: 'custom'
  },
  {
    label: '标签颜色',
    // 设置组件类型
    type: 'colorPicker',
    // 字段
    field: 'conversionTag_style_fill',
    // 对应options中的字段
    optionField: 'conversionTag.style.fill',
    // 绑定的值
    value: '#8c8c8c',
    tabName: 'custom'
  },
  {
    label: '显示图例',
    type: 'switch', // 设置组件类型
    field: 'legendEnable', // 字段
    optionField: 'legendEnable', // 对应options中的字段
    value: false,
    tabName: 'custom'
  },
  {
    label: '图例位置',
    type: 'select', // 设置组件类型
    field: 'legendPosition', // 字段
    optionField: 'legendPosition', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'top',
    tabName: 'custom',
    options: [
      { label: '顶部', value: 'top' },
      { label: '左上角', value: 'top-left' },
      { label: '右上角', value: 'top-right' },
      { label: '左侧', value: 'left' },
      // { label: '左上方', value: 'left-top' },
      // { label: '左下方', value: 'left-bottom' },
      { label: '右侧', value: 'right' },
      // { label: '右上方', value: 'right-top' },
      // { label: '右下方', value: 'right-bottom' },
      { label: '底部', value: 'bottom' },
      { label: '左下角', value: 'bottom-left' },
      { label: '右下角', value: 'bottom-right' }
    ]
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
const data = [
  { stage: '简历筛选', number: 253 },
  { stage: '初试人数', number: 151 },
  { stage: '复试人数', number: 113 },
  { stage: '录取人数', number: 87 },
  { stage: '入职人数', number: 59 }
]

// 配置处理脚本
const optionHandler = 'option.legend = option.legendEnable ? {position: setting.find(settingItem=>settingItem.field === \'legendPosition\').value} : false;' +
  '\noption.conversionTag.formatter = (datum) => {\n' +
  '  return option.conversionTagName + datum[\'$$percentage$$\'].toFixed(2) * 100 + \'%\'\n' +
  '}'

// 数据处理脚本
const dataHandler = '// 将数据排序\nlet valueField = setting.find(item => item.field === "yField").value\n' +
  'data = data.sort((a, b) => b[valueField] - a[valueField])\n'

// 图表配置 new Line('domName', option)
const option = {
  data,
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  xField: 'stage',
  yField: 'number',
  dynamicHeight: false,
  isTransposed: false,
  legendEnable: false,
  legendLayout: 'vertical',
  legendPosition: 'top',
  legend: false,
  conversionTagName: '转化率',
  conversionTag: {
    offsetX: 10,
    offsetY: 0,
    style: {
      fill: '#8c8c8c'
    },
    formatter: (datum) => {
      return option.conversionTagName + datum.$$percentage$$.toFixed(2) * 100 + '%'
    }
  }
}

export default {
  category,
  title,
  chartType,
  name,
  option,
  setting,
  optionHandler,
  dataHandler
}
