
import { commonConfig } from '../../js/config'

export const settingConfig = {
  // 设置面板属性的显隐
  displayOption: {
    dataAllocation: {
      // 是否存在数据配置
      enable: false
    }
  }
}
const customConfig = {
  type: 'input',
  // 自定义属性
  customize: {
    // 类型
    type: 'text',
    // 是否显示标题
    showTitle: false,
    // 标题
    title: '输入框',
    // 标题位置
    titlePosition: 'left',
    titleStyle: {
      // 标题大小
      fontSize: 14,
      // 标题颜色
      color: '#fff',
      // 标题间距
      margin: 10
    },
    // 占位符
    placeholder: '请输入',
    // 占位符字体颜色
    placeholderColor: '#fff',
    // 边框样式
    borderStyle: {
      // 边框颜色
      borderColor: '#fff',
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
