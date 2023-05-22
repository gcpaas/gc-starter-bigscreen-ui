import 'babel-polyfill'
import promise from 'es6-promise'

import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'
import { registerConfig } from 'gc-starter-bigscreen-ui'
Vue.use(ElementUI, { size: 'mini' })

registerConfig({
  routers: {
    // 大屏设计路由
    designUrl: '/bigscreen/design',
    // 预览路由
    previewUrl: '/bigscreen/preview',
    // 页面管理路由（带头部跳转路由）
    pageManagementUrl: '/',
    // 页面列表路由
    pageListUrl: '/big-screen-list',
    // 模版列表
    templateListUrl: '/big-screen-template',
    // 数据源管理
    dataSourceUrl: '/big-screen-dataSource',
    // 数据集管理
    dataSetUrl: '/big-screen-dataSet'
  },
  httpConfigs: {
    baseURL: window.CONFIG?.baseUrl
  },
  customTheme: {
    '--bs-background-1': '#151a26',
    '--bs-background-2': '#232832',
    '--bs-background-3': '#212326',
    '--bs-background-design-inner': '#1d1e20',
    '--bs-el-background': '#0F1014',
    '--bs-el-title': '#859094',
    '--bs-el-text': '#ffffff',
    '--bs-el-hover': '#007aff30',
    '--bs-el-border-color': 'transparent'
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
