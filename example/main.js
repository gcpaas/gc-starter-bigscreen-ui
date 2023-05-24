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
    '--bs-background-1': '#151a26', // 黑色
    '--bs-background-2': '#232832', // 灰色
    '--bs-background-3': '#212326',
    '--bs-background-design-inner': '#1d1e20',
    '--bs-el-background': '#151A26',
    '--bs-el-background-2': '#35393F',
    '--bs-el-background-3': '#303640', // 表头背景色
    '--bs-el-title': '#fff', // 白色字体
    '--bs-el-text': '#ffffff', // 激活白色字体
    '--bs-el-hover': '#409EFF',
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
