<template>
  <div
    v-loading="loading"
    class="bs-remote-preview"
    element-loading-text="远程组件加载中..."
  >
    <component
      :is="remoteComponent"
      :config="config"
    />
  </div>
</template>
<script>
import remoteVueLoader from 'remote-vue2-loader'
import _ from 'lodash'
import { getBizComponentInfo } from 'packages/js/api/bigScreenApi'
import { getRemoteComponents } from 'packages/RemoteComponents/remoteComponentsList'
export default {
  name: 'BsComponentPreview',
  props: {
    vueContent: {
      type: String,
      default: ''
    },
    settingContent: {
      type: String,
      default: ''
    }
  },
  computed: {
    config () {
      // eslint-disable-next-line prefer-const
      let option = {}
      // eslint-disable-next-line prefer-const
      let setting = []
      // eslint-disable-next-line prefer-const, no-unused-vars
      let title = []
      // eslint-disable-next-line prefer-const, no-unused-vars
      let data = []
      // eslint-disable-next-line prefer-const
      let settingContent = this.settingContent.replaceAll('const ', '')
      // 去掉 export default及后面代码
      settingContent = settingContent.replace(/export default[\s\S]*/, '')
      eval(settingContent)
      return {
        option,
        setting
      }
    }
  },
  watch: {
    vueContent () {
      this.getRemoteComponent()
    },
    settingContent () {
      this.getRemoteComponent()
    }
  },
  data () {
    return {
      loading: false,
      remoteComponent: null,
      newConfig: {}
    }
  },
  created () {
    this.viewComponent()
  },
  methods: {
    viewComponent () {
      // 如果有编码，则获取组件信息
      if (this.$route.query?.code) {
        getBizComponentInfo(this.$route.query?.code).then(data => {
          this.vueContent = data.vueContent
          this.settingContent = data.settingContent
          this.buildOption(this.config)
          this.remoteComponent = remoteVueLoader('data:text/plain,' + encodeURIComponent(this.vueContent))
        }).finally(() => {
          this.loading = false
        })
      }

      // 如果有组件的dirName，则获取系统组件信息
      if (this.$route.query?.dirName) {
        const dirName = this.$route.query?.dirName
        const remoteComponentList = getRemoteComponents()
        const config = remoteComponentList?.find(item => item.customize.vueSysComponentDirName === dirName)
        this.config.option = config?.option
        const vueFile = config.customize?.vueFile
        this.remoteComponent = vueFile
        this.loading = false
      }
    },
    // 尝试渲染远程文件或远程字符串
    getRemoteComponent () {
      this.loading = true
      this.buildOption(this.config)
      this.remoteComponent = remoteVueLoader('data:text/plain,' + encodeURIComponent(this.vueContent))
      this.loading = false
    },
    /**
     * 组件的配置
     * @returns {Promise<unknown>}
     */
    buildOption (config, data) {
      config = _.cloneDeep(config)
      // 遍历config.setting，将config.setting中的值赋值给config.option中对应的optionField
      config.setting.forEach(set => {
        if (set.optionField) {
          const optionField = set.optionField.split('.')
          let option = config.option
          optionField.forEach((field, index) => {
            if (index === optionField.length - 1) {
              // 数据配置时，必须有值才更新
              if ((set.tabName === 'data' && set.value) || set.tabName === 'custom') {
                option[field] = set.value
              }
            } else {
              option = option[field]
            }
          })
        }
      })
      // eslint-disable-next-line no-unused-vars
      const option = config.option
      // eslint-disable-next-line no-unused-vars
      const setting = config.setting

      return config
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-remote-preview {
  padding: 16px;
  position: relative;
  height: 100%;
  width: 100%
}
</style>
