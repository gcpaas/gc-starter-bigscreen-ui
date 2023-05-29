/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 分类
const category = 'Area'
// 标题
const title = '渐变色面积图'
// 类别， new Line()
const chartType = 'Area'
// 用于标识，唯一，和文件夹名称一致
const name = 'JianBianSeMianJiTu'

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
  {
    label: '颜色设置',
    type: 'gradual', // 设置组件类型
    field: 'areaStyle_fill', // 字段
    optionField: 'areaStyle.fill', // 对应options中的字段
    value: 'l(270) 0:#ffffff 1:#1890ff',
    tabName: 'custom'
  },
  {
    label: '边框颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'line_color', // 字段
    optionField: 'line.color', // 对应options中的字段
    value: '#1890ff',
    tabName: 'custom'
  },
  {
    label: '边框宽度',
    type: 'inputNumber', // 设置组件类型
    field: 'line_size', // 字段
    optionField: 'line.size', // 对应options中的字段
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
    Date: '2010-01',
    scales: 1998
  },
  {
    Date: '2010-02',
    scales: 1850
  },
  {
    Date: '2010-03',
    scales: 1720
  },
  {
    Date: '2010-04',
    scales: 1818
  },
  {
    Date: '2010-05',
    scales: 1920
  },
  {
    Date: '2010-06',
    scales: 1802
  },
  {
    Date: '2010-07',
    scales: 1945
  },
  {
    Date: '2010-08',
    scales: 1856
  },
  {
    Date: '2010-09',
    scales: 2107
  },
  {
    Date: '2010-10',
    scales: 2140
  },
  {
    Date: '2010-11',
    scales: 2311
  },
  {
    Date: '2010-12',
    scales: 1972
  },
  {
    Date: '2011-01',
    scales: 1760
  },
  {
    Date: '2011-02',
    scales: 1824
  },
  {
    Date: '2011-03',
    scales: 1801
  },
  {
    Date: '2011-04',
    scales: 2001
  },
  {
    Date: '2011-05',
    scales: 1640
  },
  {
    Date: '2011-06',
    scales: 1502
  },
  {
    Date: '2011-07',
    scales: 1621
  },
  {
    Date: '2011-08',
    scales: 1480
  },
  {
    Date: '2011-09',
    scales: 1549
  },
  {
    Date: '2011-10',
    scales: 1390
  },
  {
    Date: '2011-11',
    scales: 1325
  },
  {
    Date: '2011-12',
    scales: 1250
  },
  {
    Date: '2012-01',
    scales: 1394
  },
  {
    Date: '2012-02',
    scales: 1406
  },
  {
    Date: '2012-03',
    scales: 1578
  },
  {
    Date: '2012-04',
    scales: 1465
  },
  {
    Date: '2012-05',
    scales: 1689
  },
  {
    Date: '2012-06',
    scales: 1755
  },
  {
    Date: '2012-07',
    scales: 1495
  },
  {
    Date: '2012-08',
    scales: 1508
  },
  {
    Date: '2012-09',
    scales: 1433
  },
  {
    Date: '2012-10',
    scales: 1344
  },
  {
    Date: '2012-11',
    scales: 1201
  },
  {
    Date: '2012-12',
    scales: 1065
  },
  {
    Date: '2013-01',
    scales: 1255
  },
  {
    Date: '2013-02',
    scales: 1429
  },
  {
    Date: '2013-03',
    scales: 1398
  },
  {
    Date: '2013-04',
    scales: 1678
  },
  {
    Date: '2013-05',
    scales: 1524
  },
  {
    Date: '2013-06',
    scales: 1688
  },
  {
    Date: '2013-07',
    scales: 1500
  },
  {
    Date: '2013-08',
    scales: 1670
  },
  {
    Date: '2013-09',
    scales: 1734
  },
  {
    Date: '2013-10',
    scales: 1699
  },
  {
    Date: '2013-11',
    scales: 1508
  },
  {
    Date: '2013-12',
    scales: 1680
  },
  {
    Date: '2014-01',
    scales: 1750
  },
  {
    Date: '2014-02',
    scales: 1602
  },
  {
    Date: '2014-03',
    scales: 1834
  },
  {
    Date: '2014-04',
    scales: 1722
  },
  {
    Date: '2014-05',
    scales: 1430
  },
  {
    Date: '2014-06',
    scales: 1280
  },
  {
    Date: '2014-07',
    scales: 1367
  },
  {
    Date: '2014-08',
    scales: 1155
  },
  {
    Date: '2014-09',
    scales: 1289
  },
  {
    Date: '2014-10',
    scales: 1104
  },
  {
    Date: '2014-11',
    scales: 1246
  },
  {
    Date: '2014-12',
    scales: 1098
  },
  {
    Date: '2015-01',
    scales: 1189
  },
  {
    Date: '2015-02',
    scales: 1276
  },
  {
    Date: '2015-03',
    scales: 1033
  },
  {
    Date: '2015-04',
    scales: 956
  },
  {
    Date: '2015-05',
    scales: 845
  },
  {
    Date: '2015-06',
    scales: 1089
  },
  {
    Date: '2015-07',
    scales: 944
  },
  {
    Date: '2015-08',
    scales: 1043
  },
  {
    Date: '2015-09',
    scales: 893
  },
  {
    Date: '2015-10',
    scales: 840
  },
  {
    Date: '2015-11',
    scales: 934
  },
  {
    Date: '2015-12',
    scales: 810
  },
  {
    Date: '2016-01',
    scales: 782
  },
  {
    Date: '2016-02',
    scales: 1089
  },
  {
    Date: '2016-03',
    scales: 745
  },
  {
    Date: '2016-04',
    scales: 680
  },
  {
    Date: '2016-05',
    scales: 802
  },
  {
    Date: '2016-06',
    scales: 697
  },
  {
    Date: '2016-07',
    scales: 583
  },
  {
    Date: '2016-08',
    scales: 456
  },
  {
    Date: '2016-09',
    scales: 524
  },
  {
    Date: '2016-10',
    scales: 398
  },
  {
    Date: '2016-11',
    scales: 278
  },
  {
    Date: '2016-12',
    scales: 195
  },
  {
    Date: '2017-01',
    scales: 145
  },
  {
    Date: '2017-02',
    scales: 207
  }
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
    fill: 'l(270) 0:#ffffff 1:#1890ff'
  },
  line: {
    color: '#1890ff',
    size: 1
  },
  yAxis: {
    label: {
      style: {
        opacity: 1
      }
    }
  }
  // point: {
  //   color: ''
  // }
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
