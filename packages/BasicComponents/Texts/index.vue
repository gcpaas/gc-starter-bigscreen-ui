<template>
  <div
    class="bs-design-wrap"
    :class="`bs-text-${customTheme}`"
  >
    <div
      class="content-box"
      :style="{'font-size': config.customize.fontSize +'px','font-weight': +config.customize.fontWeight,'background-image': `-webkit-linear-gradient(${config.customize.color})`}"
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
        text = '文本标签占位符'
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
    /* 将背景设为渐变 */
    /*background-image: -webkit-linear-gradient(left, #6294F7, #C85D14);*/
    /* 规定背景绘制区域 */
    -webkit-background-clip: text;
    /* 将文字隐藏 */
    -webkit-text-fill-color: transparent;
  }
</style>
