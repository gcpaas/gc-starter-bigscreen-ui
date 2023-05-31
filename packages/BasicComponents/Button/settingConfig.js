
import { commonConfig, displayOption } from 'packages/js/config'

export const settingConfig = {
  legend: false,
  isGroup: true,
  data: [],
  label: {
    // 可手动配置 label 数据标签位置
    position: 'top', // 'top', 'bottom', 'middle',
    // 配置样式
    content: ''
  },
  seriesField: '', // 分组
  displayOption: {
    ...displayOption
  }
}

const customConfig = {
  type: 'button',
  // 名称
  name: '查询',
  // 自定义属性
  customize: {
    // 类型
    type: 'primary',
    // // 是否是圆角按钮
    // isRound: false,
    // // 是否是朴素按钮
    // isPlain: false,
    // 是否需要加载中效果
    // isLoading: false,
    // 背景颜色
    backgroundColor: '#409EFF',
    // 字体颜色
    fontColor: '#fff',
    // 字体大小
    fontSize: 14,
    borderStyle: {
      // 边框颜色
      borderColor: '#409EFF',
      // 边框宽度
      borderWidth: 1,
      // 边框样式
      borderStyle: 'solid',
      // 边框圆角
      borderRadius: 16
    }

  }

}
export const dataConfig = {
  ...commonConfig(customConfig)
}
