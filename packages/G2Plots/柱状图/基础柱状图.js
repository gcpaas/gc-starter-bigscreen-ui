/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Column'
// 标题
const title = '基础柱状图'
// 类别， new Line()
const chartType = 'Column'
// 用于标识，唯一，和文件夹名称一致
const name = 'JiChuZhuZhuangTu'

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
    label: '柱子颜色',
    type: 'gradual', // 设置组件类型
    field: 'columnStyle_fill', // 字段
    optionField: 'columnStyle.fill', // 对应options中的字段
    value: 'l(90) 0:#5AA6AB 1:#217AB1',
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
    type: '家具家电',
    sales: 38
  },
  {
    type: '粮油副食',
    sales: 52
  },
  {
    type: '生鲜水果',
    sales: 61
  },
  {
    type: '美容洗护',
    sales: 145
  },
  {
    type: '母婴用品',
    sales: 48
  },
  {
    type: '进口食品',
    sales: 38
  },
  {
    type: '食品饮料',
    sales: 38
  },
  {
    type: '家庭清洁',
    sales: 38
  }
]

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  data,
  appendPadding: [20, 20, 20, 20], // 设置图标的边距
  xField: 'type',
  yField: 'sales',
  color: '',
  columnStyle: { // 设置柱子渐变色
    fill: 'l(90) 0:#5AA6AB 1:#217AB1'
  },
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle', // 'top', 'bottom', 'middle',
    // 配置样式
    style: {
      fill: '#FFFFFF',
      opacity: 0
    }
  },
  // pattern: {
  //   type: ''
  // },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false
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
  },
  meta: {
    type: {
      alias: '类别'
    },
    sales: {
      alias: '销售额'
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
