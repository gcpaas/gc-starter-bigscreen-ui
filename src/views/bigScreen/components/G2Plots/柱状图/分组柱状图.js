/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Column'
// 标题
const title = '分组柱状图'
// 类别， new Line()
const chartType = 'Column'
// 用于标识，唯一，和文件夹名称一致
const name = 'FenZuZhuZhuangTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    type: 'select', // 设置组件类型
    field: 'xField', // 字段
    optionField: 'xField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '指标',
    type: 'select', // 设置组件类型
    field: 'yField', // 字段
    optionField: 'yField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '分组字段',
    type: 'select', // 设置组件类型
    field: 'seriesField', // 字段
    optionField: 'seriesField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '图例位置',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'legend_position',
    // 对应options中的字段
    optionField: 'legend.position',
    // 是否多选
    multiple: false,
    value: 'top',
    tabName: 'custom',
    options: [
      { label: '顶部', value: 'top' },
      { label: '左侧', value: 'left' },
      { label: '右侧', value: 'right' },
      { label: '底部', value: 'bottom' }
    ]
  },
  {
    label: '数据标签显隐',
    type: 'switchNumber', // 设置组件类型
    field: 'label_style_opacity', // 字段
    optionField: 'label.style.opacity', // 对应options中的字段
    value: 1,
    tabName: 'custom'
  },
  {
    label: '数据标签位置',
    type: 'select', // 设置组件类型
    field: 'label_position', // 字段
    optionField: 'label.position', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'middle',
    tabName: 'custom',
    options: [
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'bottom',
        value: 'bottom'
      },
      {
        label: 'middle',
        value: 'middle'
      }
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
  {
    name: 'London',
    月份: 'Jan.',
    月均降雨量: 18.9
  },
  {
    name: 'London',
    月份: 'Feb.',
    月均降雨量: 28.8
  },
  {
    name: 'London',
    月份: 'Mar.',
    月均降雨量: 39.3
  },
  {
    name: 'London',
    月份: 'Apr.',
    月均降雨量: 81.4
  },
  {
    name: 'London',
    月份: 'May',
    月均降雨量: 47
  },
  {
    name: 'London',
    月份: 'Jun.',
    月均降雨量: 20.3
  },
  {
    name: 'London',
    月份: 'Jul.',
    月均降雨量: 24
  },
  {
    name: 'London',
    月份: 'Aug.',
    月均降雨量: 35.6
  },
  {
    name: 'Berlin',
    月份: 'Jan.',
    月均降雨量: 12.4
  },
  {
    name: 'Berlin',
    月份: 'Feb.',
    月均降雨量: 23.2
  },
  {
    name: 'Berlin',
    月份: 'Mar.',
    月均降雨量: 34.5
  },
  {
    name: 'Berlin',
    月份: 'Apr.',
    月均降雨量: 99.7
  },
  {
    name: 'Berlin',
    月份: 'May',
    月均降雨量: 52.6
  },
  {
    name: 'Berlin',
    月份: 'Jun.',
    月均降雨量: 35.5
  },
  {
    name: 'Berlin',
    月份: 'Jul.',
    月均降雨量: 37.4
  },
  {
    name: 'Berlin',
    月份: 'Aug.',
    月均降雨量: 42.4
  }
]

// 数据处理脚本
const dataHandler = ``

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  legend: {
    // 图例
    position: 'top'
  },
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  isGroup: true,
  xField: '月份',
  yField: '月均降雨量',
  seriesField: 'name',
  /** 设置颜色 */
  // color: ['#1ca9e6', '#f88c24'],
  /** 设置间距 */
  // marginRatio: 0.1,
  pattern: {
    type: ''
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
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle', // 'top', 'middle', 'bottom'
    // 配置样式
    style: {
      opacity: 1
    },
    // 可配置附加的布局方法
    layout: [
      // 柱形图数据标签位置自动调整
      { type: 'interval-adjust-position' },
      // 数据标签防遮挡
      { type: 'interval-hide-overlap' },
      // 数据标签文颜色自动调整
      { type: 'adjust-color' }
    ]
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
