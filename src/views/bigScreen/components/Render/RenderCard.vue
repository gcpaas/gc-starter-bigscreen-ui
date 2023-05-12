<!--
 * @description: 渲染组件
 * @Date: 2022-08-18 09:42:45
 * @Author: xingheng
-->

<template>
  <div class="render-item-wrap">
    <component
      :is="resolveComponentType(config.type)"
      :id="`${config.code}`"
      :ref="config.code"
      :key="config.key"
      :config="config"
    />
  </div>
</template>
<script>
import { resolveComponentType } from 'gc-starter-bigscreen/utils'
import pcComponent from 'gc-starter-bigscreen/bulkImport/componentImport'
import { dataInit, destroyedEvent } from 'gc-starter-bigscreen/utils/eventBus'
import CustomComponent from '../PlotRender/index.vue'
import Svgs from '../Svgs/index.vue'
let components = {}
for (const key in pcComponent) {
  if (Object.hasOwnProperty.call(pcComponent, key)) {
    components[key] = pcComponent[key]
  }
}
export default {
  name: 'RenderCard',
  components: {
    ...components,
    CustomComponent,
    Svgs
  },
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    },
    ruleKey: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    // 调用初始化方法
    dataInit(this)
  },
  beforeDestroy () {
    destroyedEvent()
  },
  methods: {
    resolveComponentType
  }
}
</script>

<style lang="scss" scoped>
.render-item-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
