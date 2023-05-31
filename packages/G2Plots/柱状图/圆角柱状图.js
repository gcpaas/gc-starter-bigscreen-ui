/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Column'
// 标题
const title = '圆角柱状图'
// 类别， new Line()
const chartType = 'Column'
// 用于标识，唯一，和文件夹名称一致
const name = 'YuanJiaoZhuZhuangTu'

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
    value: 0,
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
    city: '石家庄',
    type: '水果',
    value: 14500
  },
  {
    city: '石家庄',
    type: '米面',
    value: 8500
  },
  {
    city: '石家庄',
    type: '特产零食',
    value: 10000
  },
  {
    city: '石家庄',
    type: '茶叶',
    value: 7000
  },
  {
    city: '深圳',
    type: '水果',
    value: 9000
  },
  {
    city: '深圳',
    type: '米面',
    value: 8500
  },
  {
    city: '深圳',
    type: '特产零食',
    value: 11000
  },
  {
    city: '深圳',
    type: '茶叶',
    value: 6000
  },
  {
    city: '温州',
    type: '水果',
    value: 16000
  },
  {
    city: '温州',
    type: '米面',
    value: 5000
  },
  {
    city: '温州',
    type: '特产零食',
    value: 6000
  },
  {
    city: '温州',
    type: '茶叶',
    value: 10000
  },
  {
    city: '宁波',
    type: '水果',
    value: 14000
  },
  {
    city: '宁波',
    type: '米面',
    value: 9000
  },
  {
    city: '宁波',
    type: '特产零食',
    value: 10000
  },
  {
    city: '宁波',
    type: '茶叶',
    value: 9000
  },
  {
    city: '无锡',
    type: '水果',
    value: 14000
  },
  {
    city: '无锡',
    type: '米面',
    value: 9000
  },
  {
    city: '无锡',
    type: '特产零食',
    value: 10000
  },
  {
    city: '无锡',
    type: '茶叶',
    value: 6000
  },
  {
    city: '杭州',
    type: '水果',
    value: 9000
  },
  {
    city: '杭州',
    type: '米面',
    value: 8500
  },
  {
    city: '杭州',
    type: '特产零食',
    value: 10000
  },
  {
    city: '杭州',
    type: '茶叶',
    value: 6000
  },
  {
    city: '北京',
    type: '水果',
    value: 17000
  },
  {
    city: '北京',
    type: '米面',
    value: 6000
  },
  {
    city: '北京',
    type: '特产零食',
    value: 7000
  },
  {
    city: '北京',
    type: '茶叶',
    value: 10000
  },
  {
    city: '上海',
    type: '水果',
    value: 18000
  },
  {
    city: '上海',
    type: '米面',
    value: 11000
  },
  {
    city: '上海',
    type: '特产零食',
    value: 15000
  },
  {
    city: '上海',
    type: '茶叶',
    value: 14000
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
  xField: 'city',
  yField: 'value',
  seriesField: 'type',
  isGroup: 'true',
  columnStyle: {
    radius: [20, 20, 0, 0]
  },
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  legendEnable: false,
  legendLayout: 'vertical',
  legendPosition: 'top',
  legend: false,
  pattern: {
    type: ''
  },
  label: {
    // 可手动配置 label 数据标签位置
    position: 'bottom', // 'top', 'bottom', 'middle'
    // 配置样式
    style: {
      opacity: 0
    },
    // 可配置附加的布局方法
    layout: [
      // 数据标签防遮挡
      { type: 'interval-hide-overlap' },
      // 数据标签文颜色自动调整
      { type: 'adjust-color' }
    ]
  },
  yAxis: {
    grid: {
      line: {
        style: {
          stroke: '#d0d0d0',
          lineWidth: 0,
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
