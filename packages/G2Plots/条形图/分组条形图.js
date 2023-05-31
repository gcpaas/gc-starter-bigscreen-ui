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
    label: '数据标签显隐',
    type: 'switchNumber', // 设置组件类型
    field: 'label_style_opacity', // 字段
    optionField: 'label.style.opacity', // 对应options中的字段
    value: 0,
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
    label: '数据标签大小',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'label_style_fontSize',
    // 对应options中的字段
    optionField: 'label.style.fontSize',
    value: 12,
    tabName: 'custom'
  },
  {
    label: '网格线颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'xAxis_grid_line_style_stroke', // 字段
    optionField: 'xAxis.grid.line.style.stroke', // 对应options中的字段
    value: '#d0d0d0',
    tabName: 'custom'
  },
  {
    label: '网格线宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'xAxis_grid_line_style_lineWidth', // 字段
    optionField: 'xAxis.grid.line.style.lineWidth', // 对应options中的字段
    value: 0,
    tabName: 'custom'
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
    label: '圆角设置',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'radiusNum',
    // 对应options中的字段
    optionField: 'radiusNum',
    value: 10,
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

// 配置处理脚本
const optionHandler = '\noption.legend = option.legendEnable ? {position: setting.find(settingItem=>settingItem.field === \'legendPosition\').value} : false;' +
  '\nconst radiusNum = setting.find(settingItem=>settingItem.field === \'radiusNum\').value; option.barStyle.radius = [radiusNum,radiusNum,0,0]'

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  isGroup: true,
  xField: 'value',
  yField: 'label',
  legendEnable: false,
  legendLayout: 'vertical',
  legendPosition: 'top',
  /** 自定义颜色 */
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  seriesField: 'type',
  legend: false,
  barStyle: {
    radius: [10, 10, 0, 0]// 设置条形图的圆角
  },
  label: {
    position: 'middle',
    style: {
      fill: '#59F25F',
      opacity: 0,
      fontSize: 12
    }
  },
  radiusNum: 0, // 设置条形图的圆角的中间值
  yAxis: {
    label: {
      style: {
        opacity: 1
      }
    }
  },
  xAxis: {
    grid: {
      line: {
        style: {
          stroke: '#d0d0d0',
          lineWidth: 0
        }
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
  optionHandler,
  dataHandler
}
