<template>
  <div style="width: 100%; height: 100%" class="bs-design-wrap">
    <div
      :key="updateKey"
      class="custom-border-box"
      :style="{
        height: lineHeight + 'px',
        'background-color': backgroundColor
      }"
    />
  </div>
</template>
<script>
import { refreshComponentMixin } from 'packages/js/mixins/refreshComponent'
export default {
  name: 'Border16',
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
    lineHeight() {
      return this.config.customize.height || 40
    },
    backgroundColor() {
      return this.config.customize.backgroundColor || '#007aff'
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .custom-border-box {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(131, 191, 246, 0);
    background-color: #007aff;
    display: flex;
    justify-content: center;
    align-items: center;
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
