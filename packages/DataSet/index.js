// 引入组件模块
import DataSource from './components/DataSource'
import DatasetConfig from './components/DatasetConfig'

// 存储组件列表
const components = [
  DataSource,
  DatasetConfig
]

// 遍历注册组件
function install (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  DataSource,
  DatasetConfig
}

export default {
  install,
  DataSource,
  DatasetConfig
}
