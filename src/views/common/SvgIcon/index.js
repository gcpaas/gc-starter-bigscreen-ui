// 导入组件，组件必须声明 name
import SvgIcon from './src/SvgIcon.vue'

// 为组件添加 install 方法，用于按需引入
SvgIcon.install = function (Vue) {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
