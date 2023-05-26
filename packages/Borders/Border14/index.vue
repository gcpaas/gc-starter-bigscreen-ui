<template>
  <div style="width: 100%; height: 100%" class="bs-design-wrap">
    <div
      :key="updateKey"
      class="custom-border-box"
      :style="{
        border: `${width}px solid ${color} `,
        'background-color': backgroundColor
      }"
    />
  </div>
</template>
<script>
import { refreshComponentMixin } from 'packages/js/mixins/refreshComponent'
export default {
  name: 'Border14',
  components: {},
  mixins: [refreshComponentMixin],
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed: {
    color() {
      return this.config.customize.borderColor || ''
    },
    width() {
      return this.config.customize.borderWidth || 0
    },
    backgroundColor() {
      return this.config.customize.backgroundColor || ''
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.bs-design-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .custom-border-box {
    width: 100%;
    height: 100%;
  }
}

/*滚动条样式*/
/deep/::-webkit-scrollbar {
  width: 4px;
  border-radius: 4px;
  height: 4px;
}

/deep/::-webkit-scrollbar-thumb {
  background: #dddddd !important;
  border-radius: 10px;
}
</style>
