import DataSourceManagement from './index.vue'

DataSourceManagement.install = function (Vue) {
  Vue.component(DataSourceManagement.name, DataSourceManagement)
}

export default DataSourceManagement
