<template>
  <div
    v-loading="loading"
    class="bs-remote-wrap"
    element-loading-text="远程组件加载中..."
  >
    <component
      :is="remoteComponent"
      :config="config"
      @linkage="linkEvent"
    />
  </div>
</template>
<script>
import linkageMixins from 'packages/js/mixins/linkageMixins'
import commonMixins from 'packages/js/mixins/commonMixins'
import remoteVueLoader from 'remote-vue2-loader'
import { get } from 'packages/js/utils/http'
import { mapMutations, mapState } from 'vuex'
import _ from 'lodash'
import { getRemoteComponents } from 'packages/RemoteComponents/remoteComponentsList'

export default {
  name: 'LcdpRemoteComponent',
  mixins: [linkageMixins, commonMixins],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState('bigScreen', {
      pageInfo: state => state.pageInfo,
      customTheme: state => state.pageInfo.pageConfig.customTheme
    }),
    isPreview () {
      return (this.$route.path === window?.BS_CONFIG?.routers?.previewUrl) || (this.$route.path === '/big-screen/preview')
    }
  },
  data () {
    return {
      loading: false,
      remoteComponent: null
    }
  },
  created () {
    this.getRemoteComponent()
  },
  methods: {
    ...mapMutations('bigScreen', ['changeChartConfig']),
    // 尝试渲染远程文件或远程字符串
    getRemoteComponent () {
      this.loading = true
      // 1. 如果是组件
      if (this.config.customize.vueFilePath) {
        const remoteComponentList = getRemoteComponents()
        const vueFile = remoteComponentList?.find(item => item.customize.vueFilePath === this.config.customize.vueFilePath)?.customize?.vueFile
        this.remoteComponent = vueFile
        this.loading = false
        return
      }
      // 2. 通过请求获取
      if (this.config.customize.vueFileCode) {
        get('/getComponentById', {
          code: this.config.customize.vueFileCode
        }).then(res => {
          this.remoteComponent = remoteVueLoader('data:text/plain,' + encodeURIComponent(res.data))
          this.loading = false
        })
      }
    },
    chartInit () {
      // key和code相等，说明是一进来刷新，调用/chart/data/list
      if (this.config.code === this.config.key) {
        // 再根据数据更新组件
        this.updateChart()
      }
    },
    linkEvent (formData) {
      this.linkage(formData)
    },
    /**
     * 更新组件
     */
    updateChart () {
      // 看是否是缓存数据集，缓存数据集不从list接口获取数据
      if (this.config.dataSource.dataSetType === '2') {
        this.config = this.buildOption(this.config, { success: false })
      } else {
        // 非缓存数据集，从list接口初始化的组件
        if (this.isPreview) {
          this.getCurrentOption().then(({ data, config }) => {
            if (data.success) {
              // 成功后更新数据
              config = this.buildOption(config, data)
              this.changeChartConfig(config)
            }
          })
        } else {
          this.updateChartData(this.config)
        }
      }
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

      if (data.success) {
        data = data.data
        config.option = option
        config.option.data = data
      }
      return config
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-remote-wrap {

}
</style>
