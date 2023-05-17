import 'babel-polyfill'
import promise from 'es6-promise'

import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import store from './store'
import router from './router'

import { registerConfig } from 'gc-starter-bigscreen-ui'

registerConfig({
  routers: {
    // 大屏设计路由
    designUrl: '/bigscreen/design',
    // 预览路由
    previewUrl: '/bigscreen/preview',
    // 页面管理路由（带头部跳转路由）
    pageManagementUrl: '/',
    // 页面列表路由
    pageListUrl: '/pages',
    // 数据管理（带头部）
    dsManageUrl: '/data-source-manage',
    // 数据源管理
    dataSourceUrl: '/data-source-manage/data-source',
    // 数据集管理
    dataSetUrl: '/data-source-manage/data-set'
  },
  httpConfigs: {
    baseURL: window.CONFIG?.baseUrl
  },
  customPlots: []
}, router)

promise.polyfill()
// 自定义指令
Vue.use(ElementUI, { size: 'mini' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
