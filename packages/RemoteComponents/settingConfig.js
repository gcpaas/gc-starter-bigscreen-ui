import { commonConfig, displayOption } from 'packages/js/config'
export const settingConfig = {
  displayOption: { ...displayOption }
}
const customConfig = {
  root: {
    contribution: false
  },
  customize: {
    // 用户从外部传入的自定义的vue文件
    vueFile: null,
    // 文件路径
    vueFilePath: null,
    // 用户上传的vue文件编码，根据此编码获取文件内容
    vueFileCode: null,
    // vue文本内容
    vueFileContent: null
  }
}
export const dataConfig = {
  ...commonConfig(customConfig)
}
