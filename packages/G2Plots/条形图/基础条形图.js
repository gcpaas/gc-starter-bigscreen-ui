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
  // {
  //   label: '图例排列方向',
  //   type: 'select', // 设置组件类型
  //   field: 'legendLayout', // 字段
  //   optionField: 'legendLayout', // 对应options中的字段
  //   // 是否多选
  //   multiple: false,
  //   value: 'horizontal',
  //   tabName: 'custom',
  //   options: [
  //     {
  //       label: '水平',
  //       value: 'horizontal'
  //     },
  //     {
  //       label: '垂直',
  //       value: 'vertical'
  //     }
  //   ]
  // },
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
      {
        label: '上方',
        value: 'top'
      },
      {
        label: '左上方',
        value: 'top-left'
      },
      {
        label: '右上方',
        value: 'top-right'
      },
      {
        label: '左方',
        value: 'left'
      },
      {
        label: '左上方',
        value: 'left-top'
      },
      {
        label: '左下方',
        value: 'left-bottom'
      },
      {
        label: '右方',
        value: 'right'
      },
      {
        label: '右上方',
        value: 'right-top'
      },
      {
        label: '右下方',
        value: 'right-bottom'
      },
      {
        label: '下方',
        value: 'bottom'
      },
      {
        label: '左下方',
        value: 'bottom-left'
      },
      {
        label: '右下方',
        value: 'bottom-right'
      }
    ]
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
    label: '圆角设置',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'radiusNum',
    // 对应options中的字段
    optionField: 'radiusNum',
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
  { year: '1951 年', value: 38 },
  { year: '1952 年', value: 52 },
  { year: '1956 年', value: 61 },
  { year: '1957 年', value: 145 },
  { year: '1958 年', value: 48 }
]

// 数据处理脚本
const dataHandler = 'option.seriesField = setting.find(settingItem=>settingItem.field === \'yField\').value' +
  '\noption.legend = option.legendEnable ? {position: setting.find(settingItem=>settingItem.field === \'legendPosition\').value} : false;const radiusNum = setting.find(settingItem=>settingItem.field === \'radiusNum\').value; option.barStyle.radius = [radiusNum,radiusNum,0,0]'

// 图表配置 new Line('domName', option)
const option = {
  data,
  xField: 'value',
  yField: 'year',
  seriesField: 'year',
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  legendEnable: true,
  legendLayout: 'vertical',
  legendPosition: 'top',
  legend: false,
  barStyle: {
    radius: [0, 0, 0, 0]// 设置条形图的圆角
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
  dataHandler
}
