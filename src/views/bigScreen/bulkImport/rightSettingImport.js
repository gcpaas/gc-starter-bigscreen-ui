/*
 * @description: 批量导入所有右侧配置组件
 * @Date: 2023-03-13 10:04:58
 * @Author: xing.heng
 * @LastEditors: wujian
 * @LastEditTime: 2023-03-29 14:25:57
 */
let modules = {}
const replaceName = {}
// 排除的组件
const excludeCommponents = [] // 有的话就添加进去
function importComponentSetting (files) {
  files.keys().filter(key => {
    return key.match(/setting/)
  }).forEach(key => {
    // 正则，取到./和/之间的字符串
    let reg = new RegExp('(.\\/)(.*)(\\/)')
    let moduleName = key.match(reg)[0].replace(/(\.\/)|(\/)/g, '')
    // 替换组件名称
    if (replaceName[moduleName]) {
      moduleName = replaceName[moduleName]
    }
    // 去掉排除的组件
    if (!excludeCommponents.includes(moduleName)) {
      modules[moduleName] = files(key).default
    }
  })
}
importComponentSetting(require.context('../components/BasicComponents', true, /\.vue$/))
importComponentSetting(require.context('../components/Borders', true, /\.vue$/))
importComponentSetting(require.context('../components/Decorations', true, /\.vue$/))
export default modules
