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
    label: '曲线平滑',
    type: 'switch', // 设置组件类型
    field: 'smooth', // 字段
    optionField: 'smooth', // 对应options中的字段
    value: false,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '从0基准线填充',
    type: 'switch', // 设置组件类型
    field: 'startOnZero', // 字段
    optionField: 'startOnZero', // 对应options中的字段
    value: true,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '线条颜色',
    type: 'gradual', // 设置组件类型
    field: 'line_color', // 字段
    optionField: 'line.color', // 对应options中的字段
    value: 'l(0) 0:#3e5bdb 1:#3e5bdb',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '面积颜色',
    type: 'gradual', // 设置组件类型
    field: 'areaStyle_fill', // 字段
    optionField: 'areaStyle.fill', // 对应options中的字段
    value: 'l(0) 0:#3e5bdb 1:#3e5bdb',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '线条宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'line_size', // 字段
    optionField: 'line.size', // 对应options中的字段
    value: 1,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据点颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'point_color', // 字段
    optionField: 'point.color', // 对应options中的字段
    value: '',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签字体大小',
    type: 'inputNumber',
    field: 'label_style_fontSize',
    optionField: 'label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签颜色',
    type: 'colorPicker',
    field: 'label_style_fill',
    optionField: 'label.style.fill',
    value: 'rgba(255,255,255,0)',
    tabName: 'custom',
    groupName: 'graph'
  },
  // 网格线 grid
  {
    label: '网格线宽度',
    type: 'inputNumber',
    field: 'yAxis_grid_line_style_lineWidth',
    optionField: 'yAxis.grid.line.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'grid'
  },
  {
    label: '网格线颜色',
    type: 'colorPicker',
    field: 'yAxis_grid_line_style_stroke',
    optionField: 'yAxis.grid.line.style.stroke',
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'grid'
  },
  // 图例 legend
  // X轴 xAxis
  {
    label: 'x轴标题',
    type: 'input',
    field: 'xAxis_title_text',
    optionField: 'xAxis.title.text',
    value: '',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标题位置',
    type: 'select',
    field: 'xAxis_title_position',
    optionField: 'xAxis.title.position',
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
      }],
    groupName: 'xAxis'
  },
  {
    label: 'x轴标题字体大小',
    type: 'inputNumber',
    field: 'xAxis_title_style_fontSize',
    optionField: 'xAxis.title.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标题颜色',
    type: 'colorPicker',
    field: 'xAxis_title_style_fill',
    optionField: 'xAxis.title.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标签大小',
    type: 'inputNumber',
    field: 'xAxis_label_style_fontSize',
    optionField: 'xAxis.label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标签颜色',
    type: 'colorPicker',
    field: 'xAxis_label_style_fill',
    optionField: 'xAxis.label.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴线宽度',
    type: 'inputNumber',
    field: 'xAxis_line_style_lineWidth',
    optionField: 'xAxis.line.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴线颜色',
    type: 'colorPicker',
    field: 'xAxis_line_style_stroke',
    optionField: 'xAxis.line.style.stroke',
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x刻度线宽度',
    type: 'inputNumber',
    field: 'xAxis_tickLine_style_lineWidth',
    optionField: 'xAxis.tickLine.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x刻度线颜色',
    type: 'colorPicker',
    field: 'xAxis_tickLine_style_stroke',
    optionField: 'xAxis.tickLine.style.stroke',
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标签过多时旋转',
    type: 'switch',
    field: 'xAxis_label_autoRotate',
    optionField: 'xAxis.label.autoRotate',
    value: false,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标签过多时隐藏',
    type: 'switch',
    field: 'xAxis_label_autoHide',
    optionField: 'xAxis.label.autoHide',
    value: true,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: 'x轴标签过长时省略',
    type: 'switch',
    field: 'xAxis_label_autoEllipsis',
    optionField: 'xAxis.label.autoEllipsis',
    value: true,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  // Y轴 yAxis
  {
    label: 'y轴标题',
    type: 'input',
    field: 'yAxis_title_text',
    optionField: 'yAxis.title.text',
    value: '',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: 'y轴标题位置',
    type: 'select',
    field: 'yAxis_title_position',
    optionField: 'yAxis.title.position',
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
      }],
    groupName: 'yAxis'
  },
  {
    label: 'y轴标题字体大小',
    type: 'inputNumber',
    field: 'yAxis_title_style_fontSize',
    optionField: 'yAxis.title.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: 'y轴标题颜色',
    type: 'colorPicker',
    field: 'yAxis_title_style_fill',
    optionField: 'yAxis.title.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '显示y轴标签',
    type: 'switchNumber',
    field: 'yAxis_label_style_opacity',
    optionField: 'yAxis.label.style.opacity',
    value: 1,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: 'y轴标签字体大小',
    type: 'inputNumber',
    field: 'yAxis_label_style_fontSize',
    optionField: 'yAxis.label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: 'y轴标签字体颜色',
    type: 'colorPicker',
    field: 'yAxis_label_style_fill',
    optionField: 'yAxis.label.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: 'y轴线宽度',
    type: 'inputNumber',
    field: 'yAxis_line_lineWidth',
    optionField: 'yAxis.line.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: 'y轴线颜色',
    type: 'colorPicker',
    field: 'yAxis_line_stroke',
    optionField: 'yAxis.line.style.stroke',
    // 是否多选
    multiple: false,
    value: 'rgba(255,255,255,0)',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  // 边距 padding
  {
    label: '图表边距',
    type: 'padding',
    field: 'appendPadding',
    optionField: 'appendPadding',
    value: [20, 20, 20, 20],
    tabName: 'custom',
    groupName: 'padding'
  }
]

// 模拟数据
const data = [
  { Date: '2010-01', scales: 1998 },
  { Date: '2010-02', scales: 1850 },
  { Date: '2010-03', scales: 1720 },
  { Date: '2010-04', scales: 1818 },
  { Date: '2010-05', scales: 1920 },
  { Date: '2010-06', scales: 1802 },
  { Date: '2010-07', scales: 1945 },
  { Date: '2010-08', scales: 1856 },
  { Date: '2010-09', scales: 2107 },
  { Date: '2010-10', scales: 2140 }
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
    fill: 'l(0) 0:#3e5bdb 1:#3e5bdb'
  },
  label: {
    style: {
      fill: 'rgba(255,255,255,0)',
      fontSize: 12
    }
  },
  line: {
    color: '',
    size: 1
  },
  point: {
    color: ''

  },
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
      autoHide: true,
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
      autoRotate: false,
      // rotation: Math.PI / 2,
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
