/*
 * @description: 批量导入所有组件的配置config
 * @Date: 2023-03-13 10:04:58
 * @Author: xing.heng
 * @LastEditors: wujian
 * @LastEditTime: 2023-03-29 14:02:49
 */
let setModules = {} // 设置模块
let dataModules = {} // 数据模块
function importComponentSettingConfig (files) {
  files.keys().filter(key => {
    return key.match(/settingConfig/)
  }
  ).forEach(key => {
    let reg = new RegExp('(.\\/)(.*)(\\/)')
    let moduleName = key.match(reg)[0].replace(/(\.\/)|(\/)/g, '')
    moduleName = moduleName.replace(moduleName[0], moduleName[0].toLowerCase())
    setModules[moduleName] = files(key)['settingConfig']
    dataModules[moduleName] = files(key)['dataConfig']
  })
}
importComponentSettingConfig(require.context('../components/BasicComponents', true, /\.js$/))
importComponentSettingConfig(require.context('../components/Borders', true, /\.js$/))
importComponentSettingConfig(require.context('../components/Decorations', true, /\.js$/))
export { setModules, dataModules }
