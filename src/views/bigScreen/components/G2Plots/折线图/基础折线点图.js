/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Line'
// 标题
const title = '基础折线点图'
// 类别， new Line()
const chartType = 'Line'
// 用于标识，唯一，和文件夹名称一致
const name = 'JiChuZheXianDianTu'

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
    label: '数据点样式',
    type: 'select', // 设置组件类型
    field: 'point_shape', // 字段
    optionField: 'point.shape', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'custom',
    options: [
      { label: '圆形', value: 'circle' },
      { label: '三角形', value: 'triangle' },
      { label: '菱形', value: 'diamond' }
    ]
  },
  {
    label: '线条宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'lineStyle_lineWidth', // 字段
    optionField: 'lineStyle.lineWidth', // 对应options中的字段
    value: '2',
    tabName: 'custom'
  },
  {
    label: '数据点颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'point_style_stroke', // 字段
    optionField: 'point.style.stroke', // 对应options中的字段
    value: '',
    tabName: 'custom'
  },
  {
    label: '网格线颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'yAxis_grid_line_style_stroke', // 字段
    optionField: 'yAxis.grid.line.style.stroke', // 对应options中的字段
    value: '#d0d0d0',
    tabName: 'custom'
  },
  {
    label: '网格线宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'yAxis_grid_line_style_lineWidth', // 字段
    optionField: 'yAxis.grid.line.style.lineWidth', // 对应options中的字段
    value: 1,
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
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 }
]

// 数据处理脚本
const dataHandler = ``

// 图表配置 new Line('domName', option)
const option = {
  data,
  xField: 'year',
  yField: 'value',
  label: {},
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  point: {
    size: 5,
    shape: 'diamond',
    style: {
      fill: 'white',
      stroke: '#5B8FF9',
      lineWidth: 2
    }
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowBlur: 4,
        stroke: '#000',
        fill: 'red'
      }
    }
  },
  lineStyle: {
    lineWidth: 2
  },
  yAxis: {
    grid: {
      line: {
        style: {
          stroke: '#d0d0d0',
          lineWidth: 1,
          strokeOpacity: 0.7
        }
      }
    },
    label: {
      style: {
        opacity: 1
      }
    }
  },
  interactions: [{ type: 'marker-active' }]
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
