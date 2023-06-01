<template>
  <div
    class="bs-design-wrap"
    :class="{ 'no-pointer': isDesign }"
  >
    <div class="iframe-wrap">
      <iframe
        class="iframe"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
        :style="{
          width: '200%',
          height: '200%',
          transform: 'scale(.5, .5) translate(-50%, -50%)',
          border: 'none'
        }"
        :src="config.url"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IframeChart',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  computed: {
    isDesign () {
      return (window?.BS_CONFIG?.routers?.designUrl || '/big-screen/design') === this.$route.path
    }
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.bs-design-wrap {
  position: relative;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  .iframe-wrap {
    height: 100%;
  }
}
.no-pointer {
  pointer-events: none;
}
</style>
