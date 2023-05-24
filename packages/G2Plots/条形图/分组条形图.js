/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Bar'
// 标题
const title = '分组条形图'
// 类别， new Line()
const chartType = 'Bar'
// 用于标识，唯一，和文件夹名称一致
const name = 'FenZuTiaoXingTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
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
    label: '指标',
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
    label: '分组',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'seriesField',
    // 对应options中的字段
    optionField: 'seriesField',
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
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
    label: 'Mon.',
    type: 'series1',
    value: 2800
  },
  {
    label: 'Mon.',
    type: 'series2',
    value: 2260
  },
  {
    label: 'Tues.',
    type: 'series1',
    value: 1800
  },
  {
    label: 'Tues.',
    type: 'series2',
    value: 1300
  },
  {
    label: 'Wed.',
    type: 'series1',
    value: 950
  },
  {
    label: 'Wed.',
    type: 'series2',
    value: 900
  },
  {
    label: 'Thur.',
    type: 'series1',
    value: 500
  },
  {
    label: 'Thur.',
    type: 'series2',
    value: 390
  },
  {
    label: 'Fri.',
    type: 'series1',
    value: 170
  },
  {
    label: 'Fri.',
    type: 'series2',
    value: 100
  }
]

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  isGroup: true,
  xField: 'value',
  yField: 'label',
  /** 自定义颜色 */
  // color: ['#1383ab', '#c52125'],
  seriesField: 'type',
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
