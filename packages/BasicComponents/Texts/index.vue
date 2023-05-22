<template>
  <div
    class="bs-design-wrap"
    :class="`bs-text-${customTheme}`"
  >
    <div
      class="content-box"
      :style="{'font-size': config.customize.fontSize +'px','color': config.customize.color ,'font-weight': +config.customize.fontWeight}"
    >
      {{ config.option.text }}
    </div>
  </div>
</template>
<script>
import commonMixins from 'packages/js/mixins/commonMixins'
import paramsMixins from 'packages/js/mixins/paramsMixins'
export default {
  name: 'Texts',
  components: {},
  mixins: [paramsMixins, commonMixins],
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      customClass: {}
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    buildOption (config, data) {
      let text = ''
      if (data.success) {
        text = data && data.data && data.data.length ? data.data[0][config.dataSource.metricField] : '暂无数据'
      } else {
        text = config.title
      }
      config.option = {
        ...config.option,
        text
      }
      return config
    }
  }
}
</script>

<style lang="scss" scoped>
  .bs-design-wrap{
    width: 100%;
  }
  .content-box{

    text-align: center;
  }
</style>
