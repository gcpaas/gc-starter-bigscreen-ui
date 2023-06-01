/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Line'
// 标题
const title = '基础折线图'
// 类别， new Line()
const chartType = 'Line'
// 用于标识，唯一，title的中文转拼音
const name = 'JiChuZheXianTu'

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
  // x轴
  {
    label: 'x轴线宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'xAxis_line_style_lineWidth', // 字段
    optionField: 'xAxis.line.style.lineWidth', // 对应options中的字段
    value: 1,
    tabName: 'custom'
  },
  {
    label: 'x轴线颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'xAxis_line_style_stroke', // 字段
    optionField: 'xAxis.line.style.stroke', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom'
  },
  {
    label: 'x刻度线宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'xAxis_tickLine_style_lineWidth', // 字段
    optionField: 'xAxis.tickLine.style.lineWidth', // 对应options中的字段
    value: 1,
    tabName: 'custom'
  },
  {
    label: 'x刻度线颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'xAxis_tickLine_style_stroke', // 字段
    optionField: 'xAxis.tickLine.style.stroke', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom'
  },
  {
    label: 'x轴标签大小',
    type: 'inputNumber', // 设置组件类型
    field: 'xAxis_label_style_fontSize', // 字段
    optionField: 'xAxis.label.style.fontSize', // 对应options中的字段
    value: 12,
    tabName: 'custom'
  },
  {
    label: 'x轴标签颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'xAxis_label_style_fill', // 字段
    optionField: 'xAxis.label.style.fill', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom'
  },
  {
    label: 'x轴标签过多时旋转',
    type: 'switch', // 设置组件类型
    field: 'xAxis_label_autoRotate', // 字段
    optionField: 'xAxis.label.autoRotate', // 对应options中的字段
    value: false,
    tabName: 'custom'
  },
  {
    label: 'x轴标签过多时隐藏',
    type: 'switch', // 设置组件类型
    field: 'xAxis_label_autoHide', // 字段
    optionField: 'xAxis.label.autoHide', // 对应options中的字段
    value: false,
    tabName: 'custom'
  },
  {
    label: 'x轴标题',
    type: 'input', // 设置组件类型
    field: 'xAxis_title_text', // 字段
    optionField: 'xAxis.title.text', // 对应options中的字段
    value: '',
    tabName: 'custom'
  },
  {
    label: 'x轴标题位置',
    type: 'select', // 设置组件类型
    field: 'xAxis_title_position', // 字段
    optionField: 'xAxis.title.position', // 对应options中的字段
    value: 'end',
    tabName: 'custom',
    options: [
      {
        label: '左',
        value: 'start'
      },
      {
        label: '中',
        value: 'center'
      },
      {
        label: '右',
        value: 'end'
      }]
  },
  {
    label: 'x轴标题字体大小',
    type: 'inputNumber', // 设置组件类型
    field: 'xAxis_title_style_fontSize', // 字段
    optionField: 'xAxis.title.style.fontSize', // 对应options中的字段
    value: 12,
    tabName: 'custom'
  },
  {
    label: 'x轴标题颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'xAxis_title_style_fill', // 字段
    optionField: 'xAxis.title.style.fill', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom'
  },

  // y轴
  {
    label: 'y轴线宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'yAxis_line_lineWidth', // 字段
    optionField: 'yAxis.line.style.lineWidth', // 对应options中的字段
    value: 1,
    tabName: 'custom'
  },
  {
    label: 'y轴线颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'yAxis_line_stroke', // 字段
    optionField: 'yAxis.line.style.stroke', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'rgba(255,255,255,0)',
    tabName: 'custom'
  },
  {
    label: '显示y轴标签',
    type: 'switchNumber', // 设置组件类型
    field: 'yAxis_label_style_opacity', // 字段
    optionField: 'yAxis.label.style.opacity', // 对应options中的字段
    value: 1,
    tabName: 'custom'
  },
  {
    label: 'y轴标签字体大小',
    type: 'inputNumber', // 设置组件类型
    field: 'yAxis_label_style_fontSize', // 字段
    optionField: 'yAxis.label.style.fontSize', // 对应options中的字段
    value: 12,
    tabName: 'custom'
  },
  {
    label: 'y轴标签字体颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'yAxis_label_style_fill', // 字段
    optionField: 'yAxis.label.style.fill', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom'
  },
  {
    label: 'y轴标题',
    type: 'input', // 设置组件类型
    field: 'yAxis_title_text', // 字段
    optionField: 'yAxis.title.text', // 对应options中的字段
    value: '',
    tabName: 'custom'
  },
  {
    label: 'y轴标题位置',
    type: 'select', // 设置组件类型
    field: 'yAxis_title_position', // 字段
    optionField: 'yAxis.title.position', // 对应options中的字段
    value: 'end',
    tabName: 'custom',
    options: [
      {
        label: '下',
        value: 'start'
      },
      {
        label: '中',
        value: 'center'
      },
      {
        label: '上',
        value: 'end'
      }]
  },
  {
    label: 'y轴标题字体大小',
    type: 'inputNumber', // 设置组件类型
    field: 'yAxis_title_style_fontSize', // 字段
    optionField: 'yAxis.title.style.fontSize', // 对应options中的字段
    value: 12,
    tabName: 'custom'
  },
  {
    label: 'y轴标题颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'yAxis_title_style_fill', // 字段
    optionField: 'yAxis.title.style.fill', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom'
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
    ]
  },
  {
    label: '数据点大小',
    type: 'inputNumber', // 设置组件类型
    field: 'point_size', // 字段
    optionField: 'point.size', // 对应options中的字段
    value: 2,
    tabName: 'custom'
  },
  {
    label: '数据点颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'point_style_fill', // 字段
    optionField: 'point.style.fill', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '#ffffff',
    tabName: 'custom'
  },
  {
    label: '数据标签颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'label_style_fill', // 字段
    optionField: 'label.style.fill', // 对应options中的字段
    value: '#ffffff',
    tabName: 'custom'
  },
  {
    label: '数据标签字体大小',
    type: 'inputNumber', // 设置组件类型
    field: 'label_style_fontSize', // 字段
    optionField: 'label.style.fontSize', // 对应options中的字段
    value: 12,
    tabName: 'custom'
  },
  {
    label: '线条宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'lineStyle_lineWidth', // 字段
    optionField: 'lineStyle.lineWidth', // 对应options中的字段
    value: 2,
    tabName: 'custom'
  },
  {
    label: '线条颜色',
    type: 'gradual', // 设置组件类型
    field: 'lineStyle_stroke', // 字段
    optionField: 'lineStyle.stroke', // 对应options中的字段
    value: 'l(0) 0:#5F92F9 1:#62FF00',
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
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  xField: 'year',
  yField: 'value',
  label: {
    style: {
      fill: '#fff',
      fontSize: 12
    }
  },
  color: '',
  point: {
    size: 2,
    shape: 'diamond',
    style: {
      fill: 'red',
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
    lineWidth: 2,
    stroke: 'l(0) 0:#5F92F9 1:#62FF00'
  },
  // q: g2plot中xAxis.label.autoHide和autoEllipsis的区别?

  xAxis: {
    title: {
      text: '',
      position: 'end',
      style: {
        fill: '#8C8C8C',
        fontSize: 12
      }
    },
    label: {
      autoRotate: false,
      autoHide: false,
      autoEllipsis: true,
      style: {
        fill: '#8C8C8C',
        fontSize: 12
      }
    },
    line: {
      style: {
        stroke: '#d0d0d0',
        lineWidth: 1
      }
    },
    tickLine: {
      style: {
        stroke: '#d0d0d0',
        lineWidth: 1
      }
    }
  },
  yAxis: {
    title: {
      text: '',
      position: 'end',
      style: {
        fill: '#8C8C8C',
        fontSize: 12
      }
    },
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
        fill: '#8C8C8C',
        fontSize: 12,
        opacity: 1
      }
    },
    line: {
      style: {
        stroke: 'rgba(255,255,255,0)',
        lineWidth: 1
      },
      stroke: 'rgba(255,255,255,0)',
      lineWidth: 1
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
