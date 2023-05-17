/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Area'
// 标题
const title = '基础面积图'
// 类别， new Line()
const chartType = 'Area'
// 用于标识，唯一，和文件夹名称一致
const name = 'JiChuMianJiTu'

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
    tabName: 'data'
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
    tabName: 'data'
  },
  {
    label: "曲线平滑",
    type: "switch",            // 设置组件类型
    field: "smooth", // 字段
    optionField: "smooth",    // 对应options中的字段
    value: false,
    tabName: 'custom'
  },
  {
    label: "从0基准线填充",
    type: "switch",            // 设置组件类型
    field: "startOnZero", // 字段
    optionField: "startOnZero",    // 对应options中的字段
    value: true,
    tabName: 'custom'
  },
  {
    label: "图形的填充色",
    type: "colorPicker",            // 设置组件类型
    field: "areaStyle_fill", // 字段
    optionField: "areaStyle.fill",    // 对应options中的字段
    value: '#94c6ff',
    tabName: 'custom'
  },
  {
    label: "折线的颜色",
    type: "colorPicker",            // 设置组件类型
    field: "line_color", // 字段
    optionField: "line.color",    // 对应options中的字段
    value: '',
    tabName: 'custom'
  },
  {
    label: "数据点颜色",
    type: "colorPicker",            // 设置组件类型
    field: "point_color", // 字段
    optionField: "point.color",    // 对应options中的字段
    value: '',
    tabName: 'custom'
  },
  {
    label: 'y轴标签',
    type: 'switchNumber', // 设置组件类型
    field: 'yAxis_label_style_opacity', // 字段
    optionField: 'yAxis.label.style.opacity', // 对应options中的字段
    value: 1,
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
  {
    "Date": "2010-01",
    "scales": 1998
  },
  {
    "Date": "2010-02",
    "scales": 1850
  },
  {
    "Date": "2010-03",
    "scales": 1720
  },
  {
    "Date": "2010-04",
    "scales": 1818
  },
  {
    "Date": "2010-05",
    "scales": 1920
  },
  {
    "Date": "2010-06",
    "scales": 1802
  },
  {
    "Date": "2010-07",
    "scales": 1945
  },
  {
    "Date": "2010-08",
    "scales": 1856
  },
  {
    "Date": "2010-09",
    "scales": 2107
  },
  {
    "Date": "2010-10",
    "scales": 2140
  }
]

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  xField: 'Date',
  yField: 'scales',
  smooth: false,
  startOnZero: true,
  areaStyle: {
    fill: "#94c6ff"
  },
  line: {
    color: ''
  },
  point: {
    color: ''
  },
  yAxis: {
    label: {
      style: {
        opacity: 1
      }
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
  dataHandler
}


