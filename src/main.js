import 'babel-polyfill'
import promise from 'es6-promise'

import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'gc-starter-ui-plus/packages/assets/styles/theme-default/index.scss'

// import SvgIcon from '@/components/icons/export'

import App from './App'
import store from './store'
import router, { resetRouter } from './router'

import { $gc } from 'gc-starter-ui-plus'
import container from 'gc-starter-ui-plus/packages/directive/container'
import table from 'gc-starter-ui-plus/packages/directive/table' // 自适应table高度
// 样式
import '@/ds/assets/styles/dataSource/index.scss'
import { registerConfig } from 'gc-starter-bigscreen-ui'
registerConfig({
  baseUrl: window.CONFIG?.baseUrl
})
promise.polyfill()
// 自定义指令
Vue.use(ElementUI, { size: 'mini' })
Vue.directive('container', container)
Vue.directive('table', table)

Vue.config.productionTip = false
// 挂载全局
Vue.prototype.$resetRouter = resetRouter
// 权限方法
Vue.prototype.isAuth = $gc.isAuth
// get 请求封装
Vue.prototype.$get = $gc.get
// post 请求封装
Vue.prototype.$post = $gc.post
// put 请求封装
Vue.prototype.$put = $gc.put
// delete 请求封装
Vue.prototype.$del = $gc.del
// 文件下载 请求封装
Vue.prototype.$download = $gc.download
// 包装请求地址
Vue.prototype.$wrapUrl = $gc.wrapUrl
// 兼容ie下双向绑定事件
Vue.prototype.inputChange = function (e) {
  return e.target.value
};

// Vue 国际化
Vue.use(VueI18n)

// 语言包
const messages = {
  en: require('./languages/language-en'),
  zh: require('./languages/language-zh'),
  ja: require('./languages/language-jp')
}

const i18n = new VueI18n({
  // 设置语言环境
  // 选项: en | zh | es | ja
  locale: 'zh',
  // 设置语言环境信息
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})

window.windowRouter = router
