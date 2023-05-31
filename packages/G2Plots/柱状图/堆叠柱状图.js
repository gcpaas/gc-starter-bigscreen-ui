/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Column'
// 标题
const title = '堆叠柱状图'
// 类别， new Line()
const chartType = 'Column'
// 用于标识，唯一，和文件夹名称一致
const name = 'DuiDieZhuZhuangTu'

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
    label: '显示数据标签',
    type: 'switchNumber', // 设置组件类型
    field: 'label_style_opacity', // 字段
    optionField: 'label.style.opacity', // 对应options中的字段
    value: 0,
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
        label: '顶部',
        value: 'top'
      },
      {
        label: '底部',
        value: 'bottom'
      },
      {
        label: '居中',
        value: 'middle'
      }
    ]
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
    year: '1991',
    value: 3,
    type: 'Lon'
  },
  {
    year: '1992',
    value: 4,
    type: 'Lon'
  },
  {
    year: '1993',
    value: 3.5,
    type: 'Lon'
  },
  {
    year: '1994',
    value: 5,
    type: 'Lon'
  },
  {
    year: '1995',
    value: 4.9,
    type: 'Lon'
  },
  {
    year: '1996',
    value: 6,
    type: 'Lon'
  },
  {
    year: '1997',
    value: 7,
    type: 'Lon'
  },
  {
    year: '1998',
    value: 9,
    type: 'Lon'
  },
  {
    year: '1999',
    value: 13,
    type: 'Lon'
  },
  {
    year: '1991',
    value: 3,
    type: 'Bor'
  },
  {
    year: '1992',
    value: 4,
    type: 'Bor'
  },
  {
    year: '1993',
    value: 3.5,
    type: 'Bor'
  },
  {
    year: '1994',
    value: 5,
    type: 'Bor'
  },
  {
    year: '1995',
    value: 4.9,
    type: 'Bor'
  },
  {
    year: '1996',
    value: 6,
    type: 'Bor'
  },
  {
    year: '1997',
    value: 7,
    type: 'Bor'
  },
  {
    year: '1998',
    value: 9,
    type: 'Bor'
  },
  {
    year: '1999',
    value: 13,
    type: 'Bor'
  }
]

// 配置处理脚本
const optionHandler = 'option.legend = option.legendEnable ? {position: setting.find(settingItem=>settingItem.field === \'legendPosition\').value} : false;'

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  isStack: true,
  xField: 'year',
  yField: 'value',
  seriesField: 'type',
  legendEnable: false,
  legendLayout: 'vertical',
  legendPosition: 'top',
  legend: false,
  pattern: {
    type: ''
  },
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle', // 'top', 'bottom', 'middle'
    // 配置样式
    style: {
      fill: '#59F25F',
      opacity: 0,
      fontSize: 12
    }
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
