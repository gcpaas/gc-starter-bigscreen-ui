// 得到用户自定义的远程组件列表
import { dataConfig, settingConfig } from './settingConfig'
import _ from 'lodash'
export function getRemoteComponents () {
  const customList = window.BS_CONFIG?.remoteComponents || []

  const list = []
  customList.forEach((config) => {
    list.push({
      name: config.name,
      title: config.title,
      icon: null,
      img: config.img,
      className:
        'com.gccloud.bigscreen.core.module.chart.components.RemoteComponentChart',
      w: 450,
      h: 320,
      x: 0,
      y: 0,
      type: 'remoteComponent',
      option: {
        ...config.option,
        ..._.cloneDeep(settingConfig)
      },
      // 右侧面板自定义配置
      setting: config.setting,
      ..._.cloneDeep(dataConfig),
      // 自定义配置
      customize: {
        ...config.customize,
        vueFilePath: config.vueFilePath,
        vueFile: config.vueFile
      }
    })
  })
  return list
}
