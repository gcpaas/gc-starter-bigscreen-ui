/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Bar'
// 标题
const title = '基础条形图'
// 类别， new Line()
const chartType = 'Bar'
// 用于标识，唯一，和文件夹名称一致
const name = 'JiChuTiaoXingTu'

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
  },
  {
    label: '柱子颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'color', // 字段
    optionField: 'color', // 对应options中的字段
    value: '',
    tabName: 'custom'
  }
]

// 模拟数据
const data = [
  { year: '1951 年', value: 38 },
  { year: '1952 年', value: 52 },
  { year: '1956 年', value: 61 },
  { year: '1957 年', value: 145 },
  { year: '1958 年', value: 48 },
]

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  xField: 'value',
  yField: 'year',
  color: '',
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  legend: {
    position: 'top-left',
  },
  yAxis: {
    label: {
      style: {
        opacity: 1
      }
    }
  },
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


