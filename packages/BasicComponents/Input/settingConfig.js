
import { commonConfig, displayOption } from 'packages/js/config'

console.log(displayOption)

export const settingConfig = {
  padding: [30, 30, 50, 80],
  legend: false,
  isGroup: true,
  data: [],
  color: '',
  theme: 'dark',
  label: {
    // 可手动配置 label 数据标签位置
    position: 'top', // 'top', 'bottom', 'middle',
    // 配置样式
    content: ''
  },
  seriesField: '', // 分组
  displayOption: {
    ...displayOption,
    dataAllocation: { enable: true },
    dataSourceType: { enable: false },
    params: { enable: false },
    metricField: {
      // 指标
      label: '指标',
      enable: false,
      multiple: false // 是否多选
    },
    dimensionField: {
      // 表格列
      label: '表格列', // 维度/查询字段
      enable: false,
      multiple: true // 是否多选
    }
  }
}
const customConfig = {
  type: 'input',
  // 自定义属性
  customize: {
    // 是否显示标题
    showTitle: true,
    // 标题
    title: '输入框',
    titleStyle: {
      // 标题大小
      fontSize: 14,
      // 标题颜色
      color: '#fff',
      // 标题间距
      marginRight: 10
    },
    inputStyle: {
      // 输入值字体大小
      fontSize: 20,
      // 输入值字体颜色
      color: 'red',
      // 输入值左间距
      paddingLeft: 10
    },
    placeholderStyle: {
    // 占位符
      placeholder: '请输入',
      // 占位符字体颜色
      placeholderColor: '#ffffff'
    },
    // 边框样式
    borderStyle: {
      // 边框颜色
      borderColor: '#ffffff',
      // 边框宽度
      borderWidth: 1,
      // 边框样式
      borderStyle: 'solid',
      // 边框圆角
      borderRadius: 0
    },
    backgroundStyle: {
      // 背景颜色
      backgroundColor: '#151a26'
    }
  }
}
export const dataConfig = {
  ...commonConfig(customConfig)
}
