<template>
  <div
    :class="`bs-indexCard-${customTheme}`"
    style="width: 100%;height: 100%;position: relative;"
  >
    <div
      :style="{
        'background-color':customize.bgColor
      }"
      class="content"
    >
      <div
        :style="{
          'margin-right':customize.distance + 'px'
        }"
        class="content-left"
      >
        <el-image
          :style="{
            width: customize.imgSize + 'px',
            height: customize.imgSize + 'px',
          }"
          :src="customize.src"
          fit="contain"
        />
      </div>
      <div class="content-right">
        <span
          class="content-right-first"
          :style="{
            'font-size': customize.firstSize + 'px',
            'height':customize.firstSize + 'px',
            color:customize.firstColor,
            'font-weight':customize.firstWeight,
            'margin-bottom':customize.lineDistance +'px'
          }"
        >{{customize.firstLine}}</span>
        <span
          :style="{
            'font-size': customize.secondSize + 'px',
            'height':customize.secondSize + 'px',
            color:customize.secondColor,
            'font-weight':customize.secondWeight,
          }"
          class="content-right-second">
          {{ customize.secondLine }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import commonMixins from '../../../js/mixins/commonMixins'
import paramsMixins from '../../../js/mixins/paramsMixins'

export default {
  name: 'Card',
  components: {},
  mixins: [paramsMixins, commonMixins],
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      customClass: {}
    }
  },
  watch: {},
  computed: {
    customize() {
      return this.config.option.customize
    }
  },
  methods: {
    buildOption(config, data) {
      // 文本数据配置原则：选择数据集则以后端返回的数据为主，否则以设置面板中标题设置为准
      if (config.dataSource.businessKey) {
        config.customize.title = data && data.data && data.data.length ? data.data[0][config.dataSource.metricField] : '暂无数据'
      }
      return config
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  // background-color: aliceblue;
  justify-content: center;
  .content-left{
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
  }
  .content-right{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  .content-right-first{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 5px;
  }
  .content-right-second{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
