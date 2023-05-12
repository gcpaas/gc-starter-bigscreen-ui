/* eslint-disable no-useless-escape */
/*
 * @description: 批量导入pc端大屏组件
 * @Date: 2023-03-13 10:04:58
 * @Author: xing.heng
 * @LastEditors: xing.heng
 * @LastEditTime: 2023-05-12 11:09:39
 */

let modules = {}
// 组件名称替换
const replaceName = {}
// 排除的组件
const excludeCommponents = []
function importComponents (files) {
  files.keys().forEach(key => {
    // 正则，取到./和/之间的字符串
    let reg = new RegExp('(.\\/)(.*)(\\/)')
    let moduleName = key.match(reg)[0].replace(/(\.\/)|(\/)|(src)/g, '')
    // 替换组件名称
    if (replaceName[moduleName]) {
      moduleName = replaceName[moduleName]
    }
    if (!excludeCommponents.includes(moduleName)) {
      modules[moduleName] = files(key).default
    }
  })
}
importComponents(require.context('../components/BasicComponents', true, /\index.vue$/))
importComponents(require.context('../components/Borders', true, /\index.vue$/))
importComponents(require.context('../components/Decorations', true, /\index.vue$/))
export default modules
