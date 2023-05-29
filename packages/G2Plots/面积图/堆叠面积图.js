/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Area'
// 标题
const title = '堆叠面积图'
// 类别， new Line()
const chartType = 'Area'
// 用于标识，唯一，和文件夹名称一致
const name = 'DuiChengMianJiTu'

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
    label: '曲线平滑',
    type: 'switch', // 设置组件类型
    field: 'smooth', // 字段
    optionField: 'smooth', // 对应options中的字段
    value: false,
    tabName: 'custom'
  },
  {
    label: '从0基准线填充',
    type: 'switch', // 设置组件类型
    field: 'startOnZero', // 字段
    optionField: 'startOnZero', // 对应options中的字段
    value: true,
    tabName: 'custom'
  },
  // {
  //   label: "图形的填充色",
  //   type: "colorPicker",            // 设置组件类型
  //   field: "areaStyle_fill", // 字段
  //   optionField: "areaStyle.fill",    // 对应options中的字段
  //   value: '#94c6ff',
  //   tabName: 'custom'
  // },
  // {
  //   label: "折线的颜色",
  //   type: "colorPicker",            // 设置组件类型
  //   field: "line_color", // 字段
  //   optionField: "line.color",    // 对应options中的字段
  //   value: '',
  //   tabName: 'custom'
  // },
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
    country: '北美',
    date: 1965,
    value: 1390.5
  },
  {
    country: '北美',
    date: 1966,
    value: 1469.5
  },
  {
    country: '北美',
    date: 1967,
    value: 1521.7
  },
  {
    country: '北美',
    date: 1968,
    value: 1615.9
  },
  {
    country: '北美',
    date: 1969,
    value: 1703.7
  }, {
    country: '中南美',
    date: 1965,
    value: 109.2
  },
  {
    country: '中南美',
    date: 1966,
    value: 115.7
  },
  {
    country: '中南美',
    date: 1967,
    value: 120.5
  },
  {
    country: '中南美',
    date: 1968,
    value: 128
  },
  {
    country: '中南美',
    date: 1969,
    value: 134.4
  }, {
    country: '欧洲',
    date: 1965,
    value: 1058.1
  },
  {
    country: '欧洲',
    date: 1966,
    value: 1089.7
  },
  {
    country: '欧洲',
    date: 1967,
    value: 1121.7
  },
  {
    country: '欧洲',
    date: 1968,
    value: 1196.6
  },
  {
    country: '欧洲',
    date: 1969,
    value: 1285.5
  }, {
    country: 'CIS 地区',
    date: 1965,
    value: 593.3
  },
  {
    country: 'CIS 地区',
    date: 1966,
    value: 630.9
  },
  {
    country: 'CIS 地区',
    date: 1967,
    value: 663.2
  },
  {
    country: 'CIS 地区',
    date: 1968,
    value: 687.8
  },
  {
    country: 'CIS 地区',
    date: 1969,
    value: 719
  }, {
    country: '中东',
    date: 1965,
    value: 48.3
  },
  {
    country: '中东',
    date: 1966,
    value: 50.4
  },
  {
    country: '中东',
    date: 1967,
    value: 52.7
  },
  {
    country: '中东',
    date: 1968,
    value: 55.6
  },
  {
    country: '中东',
    date: 1969,
    value: 58.5
  }, {
    country: '非洲',
    date: 1965,
    value: 60.6
  },
  {
    country: '非洲',
    date: 1966,
    value: 63.3
  },
  {
    country: '非洲',
    date: 1967,
    value: 64
  },
  {
    country: '非洲',
    date: 1968,
    value: 67.4
  },
  {
    country: '非洲',
    date: 1969,
    value: 68.9
  }
]

// 数据处理脚本
const dataHandler = 'option.legend = option.legendEnable ? {position: setting.find(settingItem=>settingItem.field === \'legendPosition\').value} : false;'

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  xField: 'date',
  yField: 'value',
  seriesField: 'country',
  smooth: false,
  legendEnable: false,
  legendLayout: 'vertical',
  legendPosition: 'top',
  legend: false,
  startOnZero: true,
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
  // areaStyle: {
  //   fill: "#94c6ff"
  // },
  // line: {
  //   color: ''
  // },
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
